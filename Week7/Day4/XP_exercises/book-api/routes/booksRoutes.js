import express from "express";
import {
  getAllBooks,
  getbookById,
  createBook,
} from "../controllers/booksController.js";

const router = express.Router();

// routes
router.get("/api/books", getAllBooks);
router.get("/api/books/:id", getbookById);
router.post("/api/books", createBook);

export default router;
