import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const myUser = process.env.MONGODB_USER;
    const myKey = process.env.MONGODB_KEY;
    // const myDB = process.env.MONGODB_DATABASE; 
    const connectStr = `mongodb+srv://${myUser}:${myKey}@cluster0.xcktj.mongodb.net/?retryWrites=true&w=majority`
    const client = await MongoClient.connect(connectStr);

    return client;
};

