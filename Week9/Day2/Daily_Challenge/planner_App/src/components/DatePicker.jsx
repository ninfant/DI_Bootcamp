
import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedDay } from "../redux/actions.js";

export default function DatePicker() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSelectedDay(e.target.value));
  };

  return (
    <div>
      <input type="date" onChange={handleChange} />
    </div>
  );
}
