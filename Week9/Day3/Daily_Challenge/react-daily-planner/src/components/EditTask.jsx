import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasks/tasksSlice";

const EditTask = ({ task, closeEditor }) => {
  const [newTitle, setNewTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newTitle.trim()) {
      dispatch(editTask({ id: task.id, newTitle }));
      closeEditor();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={closeEditor}>Cancel</button>
    </div>
  );
};

export default EditTask;
