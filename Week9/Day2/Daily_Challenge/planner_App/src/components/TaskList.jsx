import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions.js";

export default function TaskList() {
  const selectedDay = useSelector((state) => state.selectedDay);
  const tasks = useSelector((state) => state.tasksByDay[selectedDay] || []);
  const dispatch = useDispatch();

  if (!selectedDay) return <p>Select a day</p>;
  if (tasks.length === 0) return <p>There is no task</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => dispatch(deleteTask(selectedDay, task.id))}>
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}
