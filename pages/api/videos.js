import { connectToDatabase } from "../../lib/db";

export async function getFetchData(req, res) {

  const client = await connectToDatabase();
  const productCollections = client.db("Next").collection("videos");
  const videos = await productCollections.find().toArray();
  return videos;
  // res.status(200).send(videos);
  // return videos;
};

export default async function handler(req, res) {
  const videos = await getFetchData();
  // res.status(200).json(jsonData);
  res.status(200).send(videos);
};