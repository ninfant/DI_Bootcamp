import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  status: "",
};
//function delayIncrementAsync, I import createAsyncThunk from  toolkit
export const delayIncrementAsync = createAsyncThunk("counter/delay", () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(10);
    }, 3 * 1000);
  });
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByVal: (state, action) => {
      console.log(action);
      state.count += Number(action.payload);
    },
    incrementWithPrepare: {
      reducer(state, action) {
        console.log(action); //seria reducer(state, { type: '...', payload: 12 })
        state.count += action.payload;
      },
      prepare(val1, val2, val3) {
        return { payload: val1 + val2 + val3 };
      },
      /*  prepare() separa la lógica de preparación del reducer
      aqui en prepare se arma el payload antes de que llegue al reducer
      payload = 12 (basado en lo que se le paso alla en react por parametro)
      y se le pasa entonces al reducer donde state.count += 12 */
    },

    delay5sec: (state) => {
      setTimeout(() => {
        state.count++;
      }, 5 * 1000);
    },
  },
  /* Esto es para cuando se trabaja con asynchronous functions como arriba esta declarada 
delayIncrementAsync function */
  extraReducers(builder) {
    builder
      .addCase(delayIncrementAsync.fulfilled, (state, action) => {
        console.log(action);
        state.count += action.payload;
        state.status = "success";
      })
      .addCase(delayIncrementAsync.rejected, (state, action) => {
        console.log(action);
        state.status = "error";
      })
      .addCase(delayIncrementAsync.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

// console.log(counterSlice.actions);
export const {
  increment,
  decrement,
  reset,
  incrementByVal,
  incrementWithPrepare,
  delay5sec,
} = counterSlice.actions;

export default counterSlice.reducer;
