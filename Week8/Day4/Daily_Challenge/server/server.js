import express from "express";
import cors from "cors";
import Router from "./router/apiRouter.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Habilitar CORS para todas las rutas y dominios
app.use(cors());

// Middleware
app.use(express.json());

// Mount the router
app.use("/api", Router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
