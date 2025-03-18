import express from "express";
import cors from "cors";
import router from "./routes/books.js"; // Import the router module


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount the router
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
