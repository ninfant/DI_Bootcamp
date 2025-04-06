import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "ACTIVE") return !task.completed;
    return true;
  });

  const addTask = () => {
    if (!taskText.trim()) return;
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: taskText, completed: false },
    });
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
