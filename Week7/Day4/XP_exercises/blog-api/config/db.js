import knex from "knex";
import dotenv from "dotenv";

dotenv.config(); //Cargar variables de entorno

const db = knex({
  client: "pg", // PostgreSQL
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

//to test if the DB was working well
// console.log(process.env.PGHOST);
// db.raw("SELECT 1")
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.error("Database connection failed:", err));

export default db;
