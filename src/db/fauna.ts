import faunadb, { Expr } from "faunadb";
export const q = faunadb.query;

function breaker (): string {
  throw Error('Invalid Env vars')
}
// console.log({
//   secret: process.env.FAUNA_SECRET ,
//   domain: process.env.FAUNA_DOMAIN,
//   port: Number(process.env.FAUNA_PORT),
//   scheme: process.env.FAUNA_SCHEME,
//   timeout: 3000,
// })

export const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET || breaker(),
  domain: process.env.FAUNA_DOMAIN|| breaker(),
  port: Number(process.env.FAUNA_PORT) || undefined,
  scheme: process.env.FAUNA_SCHEME as "http"|"https",
  timeout: 3000,
});

export const executeQuery = async (command: Expr): Promise<Object> => {
  return client.query(command);
}
