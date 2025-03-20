import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blogsRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // we called app cause is written like that in the documentation but we can call it differently
const PORT = 3001;
// const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // body parser

// app.use(auth());

// Mount the router
app.use("/", blogRoutes);

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});


