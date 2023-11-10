function TodosItem(props) {
  return (
    <div className="flex items-center justify-between bg-blue-400 p-4 my-2 mx-2 rounded-md shadow-md font-semibold ">
      <p className="text-lg text-white">{props.todoText}</p>
      <div className="flex items-center space-x-4">
        <p
          className={`text-sm ${
            props.isCompleted ? "text-green-600" : "text-red-600"
          }`}
        >
          {props.isCompleted ? "Completed" : "Incomplete"}
        </p>
        <button
          className={`bg-green-500 hover:bg-green-600 shadow-sm text-white px-3 py-1 rounded-md ${
            props.isCompleted && "cursor-not-allowed"
          }`}
          disabled={props.isCompleted}
        >
          Done
        </button>
        <button className="bg-red-500 hover:bg-red-600 shadow-sm text-white px-3 py-1 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodosItem;
