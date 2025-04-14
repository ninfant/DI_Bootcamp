import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
  selectedDate: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const id = nanoid();
      const { title, date } = action.payload;
      state.tasks[id] = { id, title, date };
    },
    deleteTask: (state, action) => {
      delete state.tasks[action.payload];
    },
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      if (state.tasks[id]) {
        state.tasks[id].title = newTitle;
      }
    },
  },
});

export const { setSelectedDate, addTask, deleteTask, editTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
