import type { NextApiRequest, NextApiResponse } from 'next';

type LoginResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method === 'POST') {
    // const { email, password } = req.body;
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
