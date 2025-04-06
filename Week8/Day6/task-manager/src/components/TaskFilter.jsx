import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskFilter = () => {
  const { dispatch, state } = useContext(TaskContext);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", payload: "ALL" })}
      >
        All
      </button>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", payload: "ACTIVE" })}
      >
        Active
      </button>
      <button
        onClick={() => dispatch({ type: "FILTER_TASKS", payload: "COMPLETED" })}
      >
        Completed
      </button>
      <p>Current Filter: {state.filter}</p>
    </div>
  );
};

export default TaskFilter;
