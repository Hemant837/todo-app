import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import NewTodoForm from "../components/NewTodoForm/NewTodoForm";

function HomePage() {
  function addNewTodo(newTodoData) {
    console.log(newTodoData);
  }
  return (
    <Fragment>
      <MainNavigation />
      <NewTodoForm onSubmitTodo={addNewTodo} />
    </Fragment>
  );
}

export default HomePage;
