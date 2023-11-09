import { useRef } from "react";

function NewTodoForm(props) {
  const todoInputRef = useRef();

  function submitTodoHandler(event) {
    event.preventDefault();

    const enteredTodo = todoInputRef.current.value;

    props.onSubmitTodo(enteredTodo)
  }
  return (
    <form className="p-4 bg-blue-200 rounded-lg" onSubmit={submitTodoHandler}>
      <h3 className="text-2xl font-semibold mb-4">Create New Todo</h3>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="todo">
          What's on your mind?
        </label>
        <input
          className="w-full border rounded-md p-2"
          type="text"
          id="todo"
          name="todo"
          ref={todoInputRef}
        />
      </div>
      <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">
        Add Todo
      </button>
    </form>
  );
}

export default NewTodoForm;
