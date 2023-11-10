import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const { isCompleted } = req.body;

    const { todoId } = req.query;

    const client = await MongoClient.connect(
      "mongodb+srv://verma:JwGM51x2JkZsZ4O1@cluster0.ktfcdhp.mongodb.net/todos?retryWrites=true&w=majority"
    );

    try {
      const db = client.db();
      const todoCollection = db.collection("todos");

      const result = await todoCollection.updateOne(
        { _id: new ObjectId(todoId) },
        { $set: { isCompleted } }
      );

      if (result.modifiedCount === 1) {
        // Update was successful
        res.status(200).json({ message: "Todo updated!" });
      } else {
        // No matching document found
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;
