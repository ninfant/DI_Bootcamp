import bcrypt from "bcrypt";
import db from "../config/db.js";
import * as userModel from "../models/users.js";

// Register new user (POST /register)
export async function registerUser(req, res) {
  const { username, password, email, first_name, last_name } = req.body;
  try {
    // Check for duplicate email
    const existingEmail = await userModel.findUserByEmail(email);
    if (existingEmail) {
      return res.status(409).json({ error: "Email already registered" });
    }
    // Check for duplicate username
    const existingUsername = await userModel.findUserByUsername(username);
    if (existingUsername) {
      return res.status(409).json({ error: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.transaction(async (trx) => {
      // lo de db.trans se usa para agrupar las operaciones, para si falla una que no se pueda hacer niguna de las operac
      //esto se usa cuando insertas en varias tablas que dependen entre sí, guardas datos que se deben mantener sincronizados
      await userModel.createUser(trx, {
        username,
        email,
        first_name,
        last_name,
      });
      await userModel.storeUserHash(trx, {
        username,
        password: hashedPassword,
      });
    });

    res.status(201).json({ message: "User registered successfully " });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register user " });
  }
}

// Login user (POST /login)
export async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserHash(username);

    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ error: "Invalid password" });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to login" });
  }
}

// Get all users (GET /users)
export async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

// Get user by ID (GET /users/:id)
export async function getUserById(req, res) {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

// Update user by ID (PUT /users/:id)
export async function updateUser(req, res) {
  const { email, first_name, last_name } = req.body;

  try {
    await userModel.updateUserById(req.params.id, {
      email,
      first_name,
      last_name,
    });
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
}
