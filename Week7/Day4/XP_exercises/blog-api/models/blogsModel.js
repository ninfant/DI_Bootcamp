import db from "../config/db.js";

// all posts
export const getAll = async () => {
  return db("blogs").select("*");
};

// to get post by ID
export const getById = async (id) => {
  return db("blogs").where({ id }).first();
};

// new post
export const create = async (title, content) => {
  return db("blogs").insert({ title, content }).returning(["title", "content"]);
};

//Update post
export const update = async (title, content, id) => {
  return db("blogs")
    .where({ id }) // Filtra por ID
    .update({ title, content }) // Actualiza los datos
    .returning("*"); // Devuelve la fila actualizada (solo en PostgreSQL)
};

// delete post by ID
export const deleted = async (id) => {
  return db("blogs").where({ id }).del();
};
