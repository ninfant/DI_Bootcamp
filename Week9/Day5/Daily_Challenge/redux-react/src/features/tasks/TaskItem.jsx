import React, { useRef } from "react";
const TaskItem = ({ task, onDelete, onEdit, isEditing, setEditingId }) => {
  const inputRef = useRef();

  const handleSave = () => {
    const newValue = inputRef.current.value;
    onEdit(task.id, newValue, task.category);
    setEditingId(null);
  };

  return (
    <li>
      {isEditing ? (
        <input
          defaultValue={task.name}
          ref={inputRef}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <span
          onClick={() => setEditingId(task.id)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          {task.name} — {task.category}
        </span>
      )}

      <button onClick={() => onDelete(task.id)}>❌ Delete</button>
      {!isEditing && (
        <button onClick={() => setEditingId(task.id)}>📝 Edit</button>
      )}
    </li>
  );
};

export default TaskItem;
