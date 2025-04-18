import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/state/slice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
