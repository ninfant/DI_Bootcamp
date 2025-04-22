// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/state/slice";
import categoriesReducer from "../features/categories/state/slice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});

export default store;
