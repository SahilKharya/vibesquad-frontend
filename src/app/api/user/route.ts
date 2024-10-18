import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  console.log("Processing POST request to save user login info");
  const { searchParams } = new URL(req.url);
  const platform = searchParams.get('p') || 'unknown';

  console.log(`Processing POST request for platform: ${platform}`);

  try {
    const body = await req.json();
    const { username, account, social } = body;

    if (!username || !account) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    console.log("Processing POST request to save user login info atttt : ", `${process.env.NEXT_PUBLIC_API_URL}/user/login`);

    // Log the payload for debugging
    console.log('Payload being sent to the external API:', body);

    // Use axios to make the POST request
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response status is OK
    if (response.status !== 200) {
      console.error('External API Error:', response.status, response.data);
      return NextResponse.json({
        message: 'Failed to save user login info',
        status: response.status,
        error: response.data,
      }, { status: response.status });
    }

    // Return the response data
    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error('Error saving user login info:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
