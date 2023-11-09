function TodosItem(props) {
  return (
    <div className="ml-2 text-white bg-blue-400 flex border w-6/12 rounded-md justify-between items-center mt-10 py-2 shadow-sm">
      <p className="ml-2">{props.todoText}</p>
      <div>
        <button className="mr-2 bg-green-600 rounded-md p-1">Done</button>
        <button className="mr-2 bg-red-600 rounded-md p-1">Delete</button>
      </div>
    </div>
  );
}

export default TodosItem;
