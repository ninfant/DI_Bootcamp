import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "./features/tasks/tasksSlice";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.tasks.selectedDate);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Daily Planner</h1>
      <div>
        <label>Select a date: </label>
        <input
          type="date"
          value={selectedDate || ""}
          onChange={(e) => dispatch(setSelectedDate(e.target.value))}
        />
      </div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
