// src/pages/TodoDetail.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TodoDetail = ({ todos, setTodos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((todo) => todo.id === parseInt(id));

  const [title, setTitle] = useState(todo ? todo.title : "");

  const handleEdit = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, title } : t
    );
    setTodos(updatedTodos);
    navigate("/");
  };

  return (
    <div className="container mx-auto p-1 pt-10 max-w-md">
      <h1 className="text-4xl text-center mb-12">{`TO DO ${todo.title}`}</h1>
      <h2 className="text-xl mb-2">{`Edit name of TO DO ${todo.title}`}</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
        <button
          onClick={handleEdit}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoDetail;
