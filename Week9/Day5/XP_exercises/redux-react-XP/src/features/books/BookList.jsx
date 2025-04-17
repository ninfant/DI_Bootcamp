import React, { useState } from "react";
import {
  allBooks,
  HorrorBooks,
  FantasyBooks,
  ScienceFictionBooks,
} from "./state/hooks";

const BookList = () => {
  const [genre, setGenre] = useState("All");

  // Choose selector dynamically
  const books =
    genre === "Horror"
      ? HorrorBooks()
      : genre === "Fantasy"
      ? FantasyBooks()
      : genre === "Science Fiction"
      ? ScienceFictionBooks()
      : allBooks();

  return (
    <>
      <h2>Book List</h2>
      <div>
        <label>Choose Genre: </label>
        <button onClick={() => setGenre("All")}>All</button>
        <button onClick={() => setGenre("Horror")}>Horror</button>
        <button onClick={() => setGenre("Fantasy")}>Fantasy</button>
        <button onClick={() => setGenre("Science Fiction")}>
          Science Fiction
        </button>
      </div>

      <section>
        {books.length === 0 ? (
          <p>No books found in this genre</p>
        ) : (
          books.map((book) => (
            <article key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>
                <strong>{book.genre}</strong>
              </p>
            </article>
          ))
        )}
      </section>
    </>
  );
};

export default BookList;
