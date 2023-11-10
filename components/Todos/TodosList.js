import TodosItem from "./TodosItem";

function TodosList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodosItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            markCompleted={props.markCompleted}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodosList;
