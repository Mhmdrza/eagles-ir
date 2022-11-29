import { NewLetterCollection } from './seed';
import { executeQuery, q } from './../db/fauna';
import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async function (req: VercelRequest, res: VercelResponse) {
  const { email = '' } = req.query;
  if (email) {
    await executeQuery(q.Create(NewLetterCollection, {
      data: {
        email
      }
    })).catch((err)=> {
      if (err.toString() === 'BadRequest: instance not unique') {
        res.send(`${email} has already subscribed!`);
      } else {
        throw err;
      }
    });
    res.send(`Email saved: ${email}!`);
  } else {
    res.status(400).send('Email has not sent');
  }
}