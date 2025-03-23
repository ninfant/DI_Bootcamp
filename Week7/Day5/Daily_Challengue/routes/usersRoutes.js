import express from "express";
import bcrypt from "bcrypt";
import { readTasks, writeTasks, generateNewId } from "../utils/utils.js";

const router = express.Router();

// retrieve all users
router.get("/", async (req, res) => {
  try {
    const users = await readTasks();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /users - Register
router.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "username and password are required" });
    }
    const users = await readTasks();
    // Check if username already exists
    const userExists = users.find((user) => user.username == username);
    const userPass = users.find((user) => user.password == password);
    if (userExists) {
      return res.status(409).json({ error: "Username already exists" });
    }

    if (userPass) {
      return res.status(409).json({ error: "Password alread exists" });
    }
    const newId = generateNewId(users); // generateNewId: me genera un nuevo ID secuencial
    const hashedPassword = await bcrypt.hash(password, 10);
    const registeredUser = {
      id: newId,
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword,
    };
    users.push(registeredUser);
    await writeTasks(users);
    res.status(201).json({
      message: "Hello your account is now created",
      user: registeredUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /users/login - Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const users = await readTasks();

    // buscar el usuario por username
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(404).json({ error: "Username is not registered" });
    }

    // comparar la contraseña ingresada con el hash guardado
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: `Hi ${username}, welcome back again!` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// retrieve a specific user by id  /users/:id
router.get("/:id", async (req, res) => {
  try {
    const users = await readTasks();
    const { id } = req.params;
    const userByID = users.find((user) => user.id == id);
    if (!userByID) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(userByID);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;

    if (!username || !firstname) {
      return res
        .status(400)
        .json({ error: "Firstname and username are required" });
    }

    const users = await readTasks();

    // Asegúrate de convertir el id a número si es necesario
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    // actualizamos los campos deseados
    const updatedUser = {
      ...users[userIndex],
      firstname,
      lastname,
      email,
      username,
      // actualizar también la contraseña y hashearla:
      password: password
        ? await bcrypt.hash(password, 10)
        : users[userIndex].password,
    };
    // reemplazar el usuario original por el nuevo
    users[userIndex] = updatedUser;

    await writeTasks(users);

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
