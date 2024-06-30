import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="pt-8">
      <h2 className="text-xl mb-2">List of TO DOs</h2>
      <ul className="max-h-96 overflow-y-auto"></ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
