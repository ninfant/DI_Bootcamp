import express from "express";

const router = express.Router();

// Homepage route
router.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

// About page route
router.get("/about", (req, res) => {
  res.json({ message: "This is the About Us page." });
});

export default router;
