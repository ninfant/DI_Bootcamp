import { Router } from "express";
import { readTasks, writeTasks, generateNewId } from "../utils/utils.js";

const router = Router();

// GET- retrieve all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET --retrieve a specific task by id- /tasks/:id
router.get("/:id", async (req, res) => {
  try {
    const tasks = await readTasks();
    const { id } = req.params;
    const taskByID = tasks.find((task) => task.id == id);
    if (!taskByID) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(taskByID);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /tasks - Create a new task
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const tasks = await readTasks();

    const newId = generateNewId(tasks); // generateNewId: me genera un nuevo ID secuencial

    const newTask = {
      id: newId,
      title,
      description: description || "", // si la variable description es un valor como undefined, null, 0, false o una cadena vacía, se asignará "" (una cadena vacía) en su lugar
    };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -- update an existing task by ID-- PUT /tasks/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex((t) => t.id === req.params.id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }
    const updatedTask = {
      ...tasks[taskIndex],
      title,
      description:
        description !== undefined ? description : tasks[taskIndex].description, //verifica si se pasó el campo description en el cuerpo de la solicitud. Si NO se pasó (es decir, si es undefined), mantiene el valor anterior (tasks[taskIndex].description).
    };

    tasks[taskIndex] = updatedTask;
    await writeTasks(tasks);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let tasks = await readTasks();
    const taskIndex = tasks.findIndex((t) => t.id == id);

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }
    const deletedTask = tasks[taskIndex];
    tasks = tasks.filter((t) => t.id !== Number(id));
    await writeTasks(tasks);
    res.json({ message: "Task deleted", task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
