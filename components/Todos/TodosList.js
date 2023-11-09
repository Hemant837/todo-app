import TodosItem from "./TodosItem";

function TodosList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <TodosItem key={todo.id} todoText={todo.todoText} />;
      })}
    </ul>
  );
}

export default TodosList;
