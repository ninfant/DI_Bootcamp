import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "../features/users/ageSlice";

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;
