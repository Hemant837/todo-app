// 85kjR0Ruad67WuqV

import { Fragment } from "react";
import NewTodoForm from "../components/NewTodoForm/NewTodoForm";
import TodosList from "../components/Todos/TodosList";

const Dummy_Todos = [
  {
    id: 1,
    todoText: "Hi",
  },
  {
    id: 2,
    todoText: "Yo",
  },
];

function HomePage() {
  function addNewTodo(newTodoData) {
    console.log(newTodoData);
  }

  return (
    <Fragment>
      <NewTodoForm onSubmitTodo={addNewTodo} />
      <TodosList todos={Dummy_Todos} />
    </Fragment>
  );
}

export default HomePage;
