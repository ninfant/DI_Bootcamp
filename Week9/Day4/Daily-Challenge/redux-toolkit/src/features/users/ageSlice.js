import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simula un delay usando setTimeout dentro de un Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const ageUpAsync = createAsyncThunk(
  "age/ageUpAsync",
  async (_, thunkAPI) => {
    await delay(1000); // delay de 1 segundo
    return 1; // sube 1 año
  }
);

export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",
  async (_, thunkAPI) => {
    await delay(1000); // delay de 1 segundo
    return -1; // baja 1 año
  }
);
const ageSlice = createSlice({
  name: "age",
  initialState: {
    age: 20,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      })
      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age += action.payload; // payload es -1
        state.loading = false;
      })
      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
