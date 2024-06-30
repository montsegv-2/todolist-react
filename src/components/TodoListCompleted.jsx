import React, { useState } from "react";

const TodoListCompleted = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4 pt-10 max-w-md">
      <h1 className="text-4xl text-center mb-8">TODO List</h1>

      <div className="mb-4">
        <h2 className="text-2xl mb-2">Crear to do</h2>
        <form onSubmit={handleAddTodo} className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow border p-2 rounded-lg w-2/3"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg w-1/3"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl mb-2">Lista de TO DOs</h2>
        <ul className="space-y-2 max-h-dvh">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border rounded"
            >
              <span className="flex-grow truncate">{todo}</span>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="bg-red-500 text-white rounded-full font-bold py-0 px-2"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListCompleted;
