import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, account, social } = req.body;

    if (!username || !account) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    console.log("this is samplee test")
    try {
      // POST request to external API to save user details
      const response = await fetch('https://api.vibesquad.co/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          account,
          social,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save user login info');
      }

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error saving user login info:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
