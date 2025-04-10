import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actions.js";

export default function AddTask() {
  const [text, setText] = useState("");
  const selectedDay = useSelector((state) => state.selectedDay);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text && selectedDay) {
      dispatch(
        addTask(selectedDay, {
          id: Date.now(),
          title: text,
        })
      );
      setText("");
    }
  };

  return (
    <div>
      <input
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
