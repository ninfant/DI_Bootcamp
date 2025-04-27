import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js"; 

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Rutas
app.use("/api/users", userRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
