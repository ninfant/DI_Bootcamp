import express from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  UpdatePost,
} from "../controllers/blogController.js";

const router = express.Router();

// routes
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.put("/posts/:id", UpdatePost);

export default router;
