import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center p-2 border rounded">
      <Link to={`/todo/${todo.id}`} className="flex-1">
        {todo.title}
      </Link>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 bg-red-500 text-white rounded-full py-0 px-2"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
