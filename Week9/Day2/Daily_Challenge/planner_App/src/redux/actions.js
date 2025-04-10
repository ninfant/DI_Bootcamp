import { SET_SELECTED_DAY, ADD_TASK, DELETE_TASK } from "./actionTypes";

export const setSelectedDay = (day) => ({
  type: SET_SELECTED_DAY,
  payload: day,
});

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

export const deleteTask = (day, id) => ({
  type: DELETE_TASK,
  payload: { day, id },
});
