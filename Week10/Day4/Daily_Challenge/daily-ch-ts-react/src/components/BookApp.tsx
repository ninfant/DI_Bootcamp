// BookApp.tsx
import React, { useState } from "react";
import List from "./List";

interface Book {
  id: number;
  title: string;
  author: string;
}

const BookApp = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const addBook = () => {
    const newBook: Book = {
      id: books.length + 1,
      title: `New Book ${books.length + 1}`,
      author: "Unknown Author",
    };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h1>My Book List</h1>
      <button onClick={addBook}>Add Book</button>
      <List
        items={books}
        renderItem={(book) => (
          <div>
            <strong>{book.title}</strong> by {book.author}
          </div>
        )}
      />
    </div>
  );
};

export default BookApp;
