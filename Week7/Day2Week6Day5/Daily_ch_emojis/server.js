import express from "express";
import cors from "cors";
import routes from "./router/emojisRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mount the router
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
