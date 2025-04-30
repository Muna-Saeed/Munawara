// register.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.status(201).json({ message: "User registered" });
  }
}

/* register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    // Register user logic
    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
  */
