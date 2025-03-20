import {
  getAll,
  getById,
  create,
  update,
  deleted,
} from "../models/blogsModel.js";

//  GET /posts → to get all posts
export const getAllPosts = async (req, res) => {
  try {
    // console.log("Fetching all posts...");
    const posts = await getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching blog posts" });
  }
};

//  GET /posts/:id → to get a post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await getById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the blog post" });
  }
};

//  POST /posts → Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ message: "Title and content required" });

    const newPost = await create(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Error creating the blog post" });
  }
};
//  UPDATE /posts/:id → UPDATE a post
export const UpdatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    const updatedPost = await update(title, content, id);
    if (!updatedPost.length) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost[0]); // Devuelve el post actualizado
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Error updating the blog post" });
  }
};

//  DELETE /posts/:id → to delete a post
export const deletePost = async (req, res) => {
  try {
    const deletedm = await deleted(req.params.id);
    if (!deletedm) return res.status(404).json({ message: "Post not found" });

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the blog post" });
  }
};
