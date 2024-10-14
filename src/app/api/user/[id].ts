import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { email, id } = session.user;

  // Fetch user data based on email or id
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`);
    const userData = await response.json();
    return res.status(200).json({ ...userData, email });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching user data' });
  }
}
