// 85kjR0Ruad67WuqV
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import NewTodoForm from "../components/NewTodoForm/NewTodoForm";
import TodosList from "../components/Todos/TodosList";

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
    const response = await fetch(`/api/update/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({ isCompleted: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    const data = await response.json();
    console.log(data);
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

  return (
    <Fragment>
      <NewTodoForm onSubmitTodo={addNewTodo} />
      <div>
        <h1 className="m-2 font-semibold text-xl">Today's Todo</h1>
        <TodosList
          todos={props.newTodos}
          markCompleted={markCompletedHandler}
          deleteTodo={deleteTodoHandler}
        />
      </div>
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
        isCompleted: newTodo.isCompleted,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
