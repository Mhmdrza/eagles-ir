import type { VercelRequest, VercelResponse } from '@vercel/node';
import { executeQuery, q } from '../src/db/fauna';


export default async function (req: VercelRequest, res: VercelResponse) {

  res.send(`Now: ${await executeQuery(q.Now())}!`);
}