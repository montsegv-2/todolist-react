import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";

const TodoDetail = ({ todos, setTodos }) => {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === parseInt(id));

  const [title, setTitle] = useState(todo ? todo.title : "");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, title } : t
    );
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <div className="relative w-full h-screen">
      <BackButton />
      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto p-1 pt-2 max-w-lg rounded-lg">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleEdit}
              autoFocus
              className="text-4xl text-center mb-28 border p-2 rounded-lg w-full"
            />
          ) : (
            <h1
              className="text-4xl text-center mb-28 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >{`TO DO ${todo.title}`}</h1>
          )}
          <h2 className="text-xl mb-2">{`Edit name of ${todo.title}`}</h2>
          <div className="flex items-center space-x-2 mb-20">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded-lg w-2/3"
            />
            <button
              onClick={handleEdit}
              className="p-2 bg-blue-500 text-white rounded-lg w-1/3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
