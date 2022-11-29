import { VercelResponse, VercelRequest } from '@vercel/node';
import { executeQuery, q } from "../src/db/fauna";

export const NewLetterCollection = "Newsletter";
export const Email_NewsLetter_ = `-email@${NewLetterCollection}`;
export const _NewsLetter_ = `@${NewLetterCollection}`;


const documents = [NewLetterCollection];
const indexObjects = [
  {
    name: Email_NewsLetter_,
    source: NewLetterCollection,
    unique: true,
    serialized: true,
    terms: [
      {
        field: ["data", "email"],
      },
    ],
    values: {},
  },
  {
    name: _NewsLetter_,
    source: NewLetterCollection,
    unique: false,
    serialized: true,
    terms: [],
    values: [],
  },
];

async function collections() {
  for (const documentName of documents) {
    await executeQuery(
      q.CreateCollection({
        name: documentName,
      })
    ).then(
      () => console.log(`${documentName} inserted`),
      (err) => console.log(err)
    );
  }
}

async function indexes() {
  for (const indxObj of indexObjects) {
    await executeQuery(
      q.CreateIndex({
        name: indxObj.name,
        source: q.Collection(indxObj.source),
        terms: indxObj.terms,
        values: indxObj.values,
        serialized: indxObj.serialized,
        unique: indxObj.unique,
      })
    ).then(
      () => console.log(indxObj.name + " insterted"),
      (err) => console.log(err.toString())
    );
  }
}

export default async function seed(req: VercelRequest, res: VercelResponse) {
  if (process.env.SEED || req.query.seed) {
    await collections();
    await indexes();
  }
  res.send('Done')
}
