import express from "express";
import { todos } from "../config/data.js";

const router = express.Router();

// Get all to-do items
router.get("/todos", (req, res) => {
  res.json(todos);
});

// add item
router.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }
  const newTodo = { id: todos.length + 1, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//update item
router.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "To-do item not found" });
  }

  todos[index] = { ...todos[index], task, completed };
  res.json(todos[index]);
});

//delete item
router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "To-do item not found" });
  }
  todos.splice(index, 1);
  res.json(todos);
});

export default router;
