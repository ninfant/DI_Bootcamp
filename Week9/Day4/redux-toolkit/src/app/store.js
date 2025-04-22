import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer, { increment } from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";
import { thunk } from "redux-thunk";

const appReducer = combineReducers({
  counterReducer,
  usersReducer,
});

// creating a new custom middleware
const logger = (store) => (next) => (action) => {
  console.log("prev state=>", store.getState());
  console.log("action=>", action);
  next(action);
  console.log("next state=>", store.getState());
};

//store
const store = configureStore({
  reducer: appReducer,
  //this way 👇 is adding the new custom middleware to the existing middlewarex
  middleware: (getDefault) => {
    console.log(getDefault());
    return getDefault().concat(logger, thunk);
  },
  // middleware: () => [thunk,logger],// this way the previous middleware is reset
});

// const delayIncrement = () => (dispatch, getState) => {
//   setTimeout(() => {
//     dispatch(increment());
//   }, 3 * 1000);
// };
// store.dispatch(delayIncrement());

// console.log(store);

export default store;
