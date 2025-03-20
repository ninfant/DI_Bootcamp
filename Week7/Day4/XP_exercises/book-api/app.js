import express from "express";
import cors from "cors";
import bookRoutes from "./routes/booksRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // we called app cause is written like that in the documentation but we can call it differently
const PORT = 5001;


// Middleware
app.use(cors());
app.use(express.json()); // body parser

// app.use(auth());

// Mount the router
app.use("/", bookRoutes);

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});


