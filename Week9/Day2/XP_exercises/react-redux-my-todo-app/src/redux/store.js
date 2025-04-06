import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice"; // para traer exactamente esto: todosSlice.reducer

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
