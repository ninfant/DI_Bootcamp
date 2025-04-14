import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const selectedDate = useSelector((state) => state.tasks.selectedDate);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  const tasksForDate = Object.values(tasks).filter(
    (task) => task.date === selectedDate
  );

  return (
    <div>
      <h2>Tasks for: {selectedDate || "No date selected"}</h2>
      {tasksForDate.length === 0 ? (
        <p>No tasks for this date</p>
      ) : (
        <ul>
          {tasksForDate.map((task) => (
            <li key={task.id}>
              {editingId === task.id ? (
                <EditTask task={task} closeEditor={() => setEditingId(null)} />
              ) : (
                <>
                  {task.title}
                  <button onClick={() => dispatch(deleteTask(task.id))}>
                    ❌
                  </button>
                  <button onClick={() => setEditingId(task.id)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
