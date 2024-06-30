import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = ({ todos, setTodos }) => {
  const addTodo = (todo) => setTodos([...todos, todo]);
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="container mx-auto p-4 pt-10 max-w-md">
      <h1 className="text-4xl text-center mb-8">TO DO List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
