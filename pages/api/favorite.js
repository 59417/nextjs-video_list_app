import { connectToDatabase } from "../../lib/db";

export async function getFetchData(req, res) {

  const client = await connectToDatabase();
  const productCollections = client.db("Next-filters").collection("favorite");
  const favs = await productCollections.find().toArray();
  return favs;
  // res.status(200).send(videos);
  // return videos;
};

export default async function handler(req, res) {
  const favs = await getFetchData();
  // res.status(200).json(jsonData);
  res.status(200).send(favs);
};