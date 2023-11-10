// 85kjR0Ruad67WuqV
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import NewTodoForm from "../components/NewTodoForm/NewTodoForm";
import TodosList from "../components/Todos/TodosList";

// const Dummy_Todos = [
//   {
//     id: 1,
//     todoText: "Hi",
//   },
//   {
//     id: 2,
//     todoText: "Yo",
//   },
// ];

function HomePage(props) {
  async function addNewTodo(newTodoData) {
    console.log(newTodoData);
    const response = await fetch("/api/create-todos", {
      method: "POST",
      body: JSON.stringify(newTodoData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    const data = await response.json();

    console.log(data);
  }

  async function markCompletedHandler(todo) {
    console.log(todo);
    const response = await fetch("/api/mark-completed", {
      method: "PATCH",
      body: JSON.stringify({ id: todo.id, isCompleted: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    const data = await response.json();
    console.log(data);
  }

  async function deleteTodoHandler(todoId) {
    console.log(todoId);
    try {
      const response = await fetch(`/api/delete-todo/${todoId}`, {
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

  return (
    <Fragment>
      <NewTodoForm onSubmitTodo={addNewTodo} />
      <TodosList
        todos={props.newTodos}
        markCompleted={markCompletedHandler}
        deleteTodo={deleteTodoHandler}
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://verma:JwGM51x2JkZsZ4O1@cluster0.ktfcdhp.mongodb.net/todos?retryWrites=true&w=majority"
  );

  const db = client.db();

  const todoCollection = db.collection("todos");

  const newTodos = await todoCollection.find().toArray();

  client.close();

  return {
    props: {
      newTodos: newTodos.map((newTodo) => ({
        id: newTodo._id.toString(),
        todoText: newTodo.todoText,
        isCompleted: false,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
