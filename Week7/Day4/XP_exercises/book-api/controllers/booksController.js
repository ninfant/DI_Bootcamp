import { getAll, getById, create } from "../models/booksModel.js";

//  to get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await getAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the books" });
  }
};

// to get a book by ID
export const getbookById = async (req, res) => {
  try {
    const book = await getById(req.params.id);
    if (!book) return res.status(404).json({ message: "book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the book" });
  }
};

//  POST /posts → Create a new post
export const createBook = async (req, res) => {
  try {
    const { title, author, publishedyear } = req.body;

    if (!title || !author || !publishedyear) {
      return res
        .status(400)
        .json({ message: "Title, author and published year are required" });
    }
    const [newBook] = await create(title, author, publishedyear); // i used here destructuring, so i will save in newBook just the first item from the array i got from create function
    console.log(newBook);

    res.status(201).json(newBook); // this return the inserted book, including id
  } catch (error) {
    console.error("Error creating the book:", error);
    res.status(500).json({ error: "Error creating the book" });
  }
};
