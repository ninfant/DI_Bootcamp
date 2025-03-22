// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.
// Create a new directory named book-api.
// Inside the book-api directory, initialize a new Node.js project and install the express package.
// Create a new file named app.js in the book-api directory.
// In app.js, import the express module and create an instance of an Express app.
// Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.
// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created)



// In app.js, import the express module and create an instance of an Express app.
const express = require("express"); 
const app = express();
app.use(express.json()); // this is for the body parser  to get what is in the body

const PORT = 5001;

// start the server
app.listen(PORT, () => {
  console.log(`Run on ${PORT} port`);
});

// Simulated database: Array of book objects
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
  },
];

// "Read all" route
// myNotes: in postman i used http://localhost:5001/api/books/
app.get("/api/books", (req, res) => {
  res.json(books); // here send books array as JSON
});

// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
app.get("/api/books/:id", (req, res) => {
  const { id } = req.params; // to get a parameters
  const findBooks = books.find((item) => item.id == id);
  if (findBooks) {
    return res.status(404).json({ message: " status code of 200 (OK)" });
  }
  return res.status(404).json({ message: "Book not found" });
});

// Implement the “Create” route at POST /api/books.
app.post("/api/books/", (req, res) => {
  const { title, author, publishedYear } = req.body; // to get what is in the body i declared up this: app.use(express.json());
  if (!title || !author || !publishedYear) {
    return res
      .status(400)
      .json({ error: "Title, author, and publishedYear are required." });
  }
  // create a new book object with an incremented ID
  const newBook = { id: books.length + 1, title, author, publishedYear }; // los datos de este newUser lo pase alla en el body del postman

  // ddd the new book to the database (array)
  books.push(newBook);
  res.status(201).json(newBook); // respond with the newly created book and status 201 (Created)
});
