import React from "react";
import DatePicker from "./components/DatePicker";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div>
      <h2>Daily Planner (Pure Redux, No Toolkit)</h2>
      <DatePicker />
      <AddTask />
      <TaskList />
    </div>
  );
}
