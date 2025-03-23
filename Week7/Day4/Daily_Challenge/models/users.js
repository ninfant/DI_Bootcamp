import db from "../config/db.js";

// Insert user basic info into 'users' table using transaction
export async function createUser(
  trx,
  { username, email, first_name, last_name }
) {
  return trx("users").insert({ username, email, first_name, last_name });
} //note: cuando llames a createUser sera dentro de un bloque db.transaction(...), y le estaras pasando trx como argumento

// Check if an email already exists
export async function findUserByEmail(email) {
  return db("users").where({ email }).first();
}

// Check if a username already exists
export async function findUserByUsername(username) {
  return db("users").where({ username }).first();
}

// Store hashed password in 'hashpwd' table
export async function storeUserHash(trx, { username, password }) {
  return trx("hashpwd").insert({ username, password });
}

// Fetch hashed password by username
export async function getUserHash(username) {
  return db("hashpwd").where({ username }).first();
}

// Get all users from 'users' table
export async function getAllUsers() {
  return db("users").select("*");
}

// Get a user by their ID
export async function getUserById(id) {
  return db("users").where({ id }).first();
}

// Update user info by ID
export async function updateUserById(id, data) {
  return db("users").where({ id }).update(data);
}
