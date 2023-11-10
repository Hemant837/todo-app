import { MongoClient } from "mongodb";

// JwGM51x2JkZsZ4O1 (todo-app) // UBLr7fgppJCYIURy (next-js)

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://verma:JwGM51x2JkZsZ4O1@cluster0.ktfcdhp.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todoCollection = db.collection("todos");

    const result = await todoCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Todo inserted!" });
  }
}

export default handler;
