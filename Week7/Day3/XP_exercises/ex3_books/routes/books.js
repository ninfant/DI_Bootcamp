import express from "express";
import { books } from "../config/data.js";

const router = express.Router();

// Get all books
router.get("/books", (req, res) => {
  res.json(books);
});

// add book
router.post("/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title) {
    return res.status(400).json({ message: "title is required" });
  }
  const newbook = { id: books.length + 1, title, author, publishedYear };
  books.push(newbook);
  res.status(201).json(newbook);
});

//update item
router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;
  const index = books.findIndex((book) => book.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[index] = { ...books[index], title, author, publishedYear };
  res.json(books[index]);
});

//delete item
router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((book) => book.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "book not found" });
  }
  books.splice(index, 1);
  res.json(books);
});

export default router;
