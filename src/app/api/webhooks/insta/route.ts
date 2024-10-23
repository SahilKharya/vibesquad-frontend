import { NextRequest, NextResponse } from 'next/server';

// This function will handle GET requests to verify the webhook during setup
export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Replace 'your-verify-token' with the verify token you configured in Instagram
  const VERIFY_TOKEN = process.env.NEXTAUTH_SECRET;

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified');
    return NextResponse.json(challenge, { status: 200 });
  } else {
    console.log('Webhook verification failed');
    return NextResponse.json({ message: 'Verification failed' }, { status: 403 });
  }
}

// This function will handle POST requests for incoming webhook events
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received Instagram webhook event:', body);

    // Handle the event (e.g., save it to the database or process the data)
    // Example: Log the event data
    console.log('Event Data:', body);

    return NextResponse.json({ message: 'Event received' }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
