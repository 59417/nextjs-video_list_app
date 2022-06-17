// import { connectToDatabase } from "../../lib/db";

// export async function getFetchData(req, res) {

//   const client = await connectToDatabase();
//   const productCollections = client.db("Next").collection("tags-dict");
//   const tags = await productCollections.find().toArray();
//   return tags;
// };

// export default async function handler(req, res) {
//   const tags = await getFetchData();
//   res.status(200).send(tags);
// };