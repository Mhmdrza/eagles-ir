import type { VercelRequest, VercelResponse } from '@vercel/node';


export default function (req: VercelRequest, res: VercelResponse) {
  const { email = '' } = req.query;
  res.send(`Email: ${email}!`);
}