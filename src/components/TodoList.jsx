import React, { useState } from "react";
import Pagination from "./Pagination";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-8">
      <div>
        <h2 className="text-xl mb-2">List of TO DOs</h2>
        <div className="max-h-screen overflow-y-auto">
          {currentTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TodoList;
