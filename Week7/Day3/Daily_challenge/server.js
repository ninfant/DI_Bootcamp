import express from "express";
import cors from "cors";
import router from "./routes/quiz.js";
// import{ auth} from "./middlewares/auth.js";

const app = express(); // we called app cause is written like that in the documentation but we can call it differently

// Middleware
app.use(cors());
app.use(express.json()); // body parser

// app.use(auth());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// Mount the router
app.use("/", router);
