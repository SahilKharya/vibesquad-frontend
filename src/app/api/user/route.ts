import { NextRequest, NextResponse } from 'next/server';

// Handle POST requests
export async function POST(req: NextRequest) {
  console.log("this is a sample test");

  try {
    const body = await req.json();
    console.log("bodyyyyyy ", body);

    const { username, account, social } = body;

    if (!username || !account) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    console.log("Processing POST request to save user login info atttt : ", `${process.env.NEXT_PUBLIC_API_URL}/user/login`);

    // POST request to external API to save user details
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body
    });


    // Capture detailed error if response is not OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API Error:', response.status, errorText);
      return NextResponse.json({
        message: 'Failed to save user login info',
        status: response.status,
        error: errorText,
      }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error saving user login info:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// Handle GET requests
export async function GET(req: NextRequest) {
  console.log("Processing GET request to fetch user data");

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/4`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
