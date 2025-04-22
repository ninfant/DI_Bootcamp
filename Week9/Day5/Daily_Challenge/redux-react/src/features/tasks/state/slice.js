import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { state } from "../../../../../../XP_exercises/redux-react-full-f/src/features/users/state/slice";

const initialState = {
  tasks: [], // objeto
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        name: action.payload.name,
        category: action.payload.category,
        completed: false,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id); // task va a ser el nuevo array con el id y porque find, pues find te da el objeto real y no una copia
      if (task) {
        task.name = action.payload.name;
        task.category = action.payload.category;
      }
    },
  },
});

// Base input selector
// only responsible for extracting the slice from the root state.
export const selectTasks = (state) => state.tasks.tasks; //state.tasks viene del store y el segundo tasks viene del del objeto tasks que yo defini en initialState

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
