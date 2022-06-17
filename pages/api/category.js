import { connectToDatabase } from "../../lib/db";

export async function getFetchData(req, res) {

  const client = await connectToDatabase();
  const productCollections = client.db("Next-filters").collection("category");
  const cats = await productCollections.find().toArray();
  return cats;
  // res.status(200).send(videos);
  // return videos;
};

export default async function handler(req, res) {
  const cats = await getFetchData();
  // res.status(200).json(jsonData);
  res.status(200).send(cats);
};