import React from "react";
import AddTodo from "./components/toDo/AddTodo";
import TodoList from "./components/toDo/TodoList";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📝 Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
