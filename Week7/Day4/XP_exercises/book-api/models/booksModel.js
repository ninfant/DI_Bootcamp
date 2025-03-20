import db from "../config/db.js";

//aqui uso métodos de Knex (ej .insert y .returning)

// to get all book
export const getAll = async () => {
  return db("books").select("*");
};

/**
 *  Al utilizar el método .first(), en lugar de devolver un arreglo
 * con todos los registros que cumplen la condición,
 * retorna directamente el primer registro encontrado.
 * Esto significa que obtendrás un objeto que representa el
 * libro con ese id, o undefined si no se encuentra ningún registro.
 */
export const getById = async (id) => {
  return db("books").where({ id }).first();
};

// new book
export const create = async (title, author, publishedyear) => {
  return db("books")
    .insert({ title, author, publishedyear })
    .returning(["id", "title", "author", "publishedyear"]); //this method return an array
};
