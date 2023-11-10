import TodosList from "../../components/Todos/TodosList";
import { MongoClient } from "mongodb";

function CompletedTodos({ completedTodos }) {
  return (
    <div>
      <h1 className="font-bold text-lg my-3 mx-3">Completed Todos</h1>
      <TodosList todos={completedTodos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

async function deleteTodoHandler(todoId) {
  try {
    const response = await fetch(`/api/delete/${todoId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Todo deleted successfully");
    } else {
      console.error("Failed to delete todo");
    }
  } catch (error) {
    console.error("Error deleting todo", error);
  }
}

export async function getServerSideProps() {
  // Connect to MongoDB
  const client = await MongoClient.connect(
    "mongodb+srv://verma:JwGM51x2JkZsZ4O1@cluster0.ktfcdhp.mongodb.net/todos?retryWrites=true&w=majority"
  );

  const db = client.db();
  const todoCollection = db.collection("todos");

  // Fetch completed todos from the database
  const completedTodos = await todoCollection
    .find({ isCompleted: true })
    .toArray();

  client.close();

  // Pass the fetched data as props to the page component
  return {
    props: {
      completedTodos: completedTodos.map((todo) => ({
        id: todo._id.toString(),
        todoText: todo.todoText,
        isCompleted: todo.isCompleted,
      })),
    },
  };
}

export default CompletedTodos;
