import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.tasks.selectedDate);

  const handleAddTask = () => {
    if (title.trim() && selectedDate) {
      dispatch(addTask({ title, date: selectedDate }));
      setTitle("");
      setError(""); // Limpia el error si todo está OK
    } else {
      setError("Please select the date first");
    }
  };

  return (
    <div>
      <h4>Add New Task</h4>
      <input
        type="text"
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddTask;
