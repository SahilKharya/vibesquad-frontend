import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { username, account, social } = body;

    // Validate the required fields
    if (!username || !account) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    console.log('Payload being sent to the external API:', body);

    const socialPlatform = Object.keys(social)[0]; // Extracts the first key, e.g., 'twitter'

    // POST request to the external API with the 'p' parameter included in the URL
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login?p=${socialPlatform}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // Timeout of 10 seconds
    });

    // Check for a successful response from the external API
    if (!response.status.toString().startsWith('2')) {
      console.error('External API error:', response.status, response.data);
      return NextResponse.json({
        message: 'Failed to save user login info',
        status: response.status,
        error: response.data,
      }, { status: response.status });
    }

    // Return the data from the external API response
    const data = response.data;
    console.log("Successful Post Login")
    return NextResponse.json(data, { status: 200 });
    
  } catch (error: any) {
    // Handle and log any errors that occur during the process
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Error saving user login info:', error.message);
    } else {
      console.error('Unknown error:', error);
    }

    return NextResponse.json({ message: 'Internal server error', error: error.message || 'Unknown error' }, { status: 500 });
  }
}
