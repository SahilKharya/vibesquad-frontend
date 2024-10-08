import { NextApiRequest, NextApiResponse } from 'next';

// This function handles incoming requests to the webhook endpoint
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle the verification request from Instagram
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token && mode === 'subscribe' && token === process.env.INSTAGRAM_VERIFY_TOKEN) {
      // Respond with the challenge token from the request
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verification fails
      res.status(403).end();
    }
  } else if (req.method === 'POST') {
    // Handle incoming webhook events
    const body = req.body;

    // Process the webhook event data
    console.log('Received Instagram webhook event:', body);

    // Respond with '200 OK' to acknowledge receipt of the event
    res.status(200).end();
  } else {
    // Respond with '405 Method Not Allowed' for unsupported methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end();
  }
}