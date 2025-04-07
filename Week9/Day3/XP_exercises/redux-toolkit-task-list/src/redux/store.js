import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer, // nombre del reducer en el store, the word todos is use after in useSelector((state) => state.todos.items);
  },
});

export default store;
