import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home todos={todos} setTodos={setTodos} />} />
        <Route
          path="/todo/:id"
          element={<TodoDetail todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    </div>
  );
}

export default App;
