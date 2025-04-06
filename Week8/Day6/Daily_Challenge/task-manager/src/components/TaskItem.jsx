import React, { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const toggleTask = () => dispatch({ type: "TOGGLE_TASK", payload: task.id });
  const deleteTask = () => dispatch({ type: "DELETE_TASK", payload: task.id });

  const saveEdit = () => {
    const updatedText = inputRef.current.value;
    if (updatedText.trim()) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: task.id, text: updatedText },
      });
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      {isEditing ? (
        <>
          <input ref={inputRef} defaultValue={task.text} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
