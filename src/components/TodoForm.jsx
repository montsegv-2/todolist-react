import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleNewTodo = (event) => {
    event.preventDefault();
    addTodo({
      id: Date.now(),
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <h2 className="text-2xl mb-2">Create to do</h2>
      <form onSubmit={handleNewTodo} className="flex items-center space-x-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow border p-2 rounded-lg w-2/3"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-1/3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
