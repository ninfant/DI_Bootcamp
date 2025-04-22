// src/features/categories/state/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push({
        id: action.payload.id,
        name: action.payload.name,
      });
    },
    editCategory: (state, action) => {
      const category = state.categories.find(
        (cat) => cat.id === action.payload.id
      );
      if (category) {
        category.name = action.payload.name;
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (cat) => cat.id !== action.payload.id
      );
    },
  },
});

export const { addCategory, editCategory, deleteCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
