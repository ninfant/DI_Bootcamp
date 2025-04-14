import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//  Aquí se define el Thunk para hacer la llamada asíncrona
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, thunkAPI) => {
    try {
      // Simula un delay artificial de 2 segundos para poder ver el loading en pantalla
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      ); // <-- ejemplo API
      if (!response.ok) throw new Error("Error getting the data");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Aquí se define el Slice de datos del usuario
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // <-- aquí se guarda la información del usuario
    loading: false, // <-- para saber si está cargando
    error: null, // <-- para manejar errores
  },
  reducers: {}, // <-- no hay reducers tradicionales aquí
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
