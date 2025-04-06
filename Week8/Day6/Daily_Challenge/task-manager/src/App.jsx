import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => (
  <TaskProvider>
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <TaskFilter />
      <TaskList />
    </div>
  </TaskProvider>
);

export default App;
