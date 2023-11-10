import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const { todoId } = req.query;

    const client = await MongoClient.connect(
      "mongodb+srv://verma:JwGM51x2JkZsZ4O1@cluster0.ktfcdhp.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todoCollection = db.collection("todos");

    const result = await (
      await todoCollection.deleteOne({
        _id: new ObjectId(todoId),
      })
    ).deletedCount;

    console.log(result);

    client.close();

    return res.status(200).json({ message: "Todo deleted!" });
  }
}

export default handler;
