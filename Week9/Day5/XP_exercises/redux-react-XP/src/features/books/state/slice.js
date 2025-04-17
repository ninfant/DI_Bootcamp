import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  {
    id: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
  },
  { id: 6, title: "The Shining", author: "Stephen King", genre: "Horror" },
  { id: 7, title: "It", author: "Stephen King", genre: "Horror" },
  { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  {
    id: 9,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
  },
];

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

// Base input selector
// only responsible for extracting the slice from the root state.
export const selectBookState = (state) => state.books;

// export const { addreaction } = booksSlice.actions;
export default booksSlice.reducer;
