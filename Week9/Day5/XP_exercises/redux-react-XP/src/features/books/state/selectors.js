import { createSelector } from "@reduxjs/toolkit";
import { selectBookState } from "./slice";

// *** con createSelector se memoiza: solo recalcula si el slice cambia***//

//a selector named selectBooks to retrieve all books from the state
export const selectBooks = createSelector(
  [selectBookState],
  (bookState) => bookState.books
);

//selectors for specific genres such as selectHorrorBooks, selectFantasyBooks, and selectScienceFictionBooks
export const selectHorrorBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);
