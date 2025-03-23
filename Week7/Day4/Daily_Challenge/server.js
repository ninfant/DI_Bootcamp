import express from "express";
import cors from "cors";
import usersRouter from "./router/users.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para todas las rutas y dominios
app.use(cors());

// Necesario para usar __dirname con ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json()); // para JSON body
app.use(express.urlencoded({ extended: true })); // para forms
app.use(express.static(path.join(__dirname, "public"))); // servir HTML/js

// Mount the router
app.use("/api/users", usersRouter);

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "authUser.html")); //res.sendFile: envíale este archivo HTML completo para que lo muestre en el navegador.
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
