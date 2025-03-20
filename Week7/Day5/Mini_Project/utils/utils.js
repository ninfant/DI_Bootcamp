import { promises as fs } from "fs"; //I imported all from npm package
import path from "path";
import { fileURLToPath } from "url";

// obtain __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// define the path to your JSON file
const tasksFilePath = path.join(__dirname, "../tasks.json");

// read tasks from the JSON file
export async function readTasks() {
  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Error reading tasks file");
  }
}

// write tasks to the JSON file
export async function writeTasks(tasks) {
  try {
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    throw new Error("Error writing tasks file");
  }
}

// Esta función recibe el array de tareas y retorna el nuevo ID
export function generateNewId(tasks) {
  if (tasks.length === 0) return 1; // Si no hay tareas, el nuevo ID será 1
  // Busca el ID máximo existente
  const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);

  return maxId + 1; // El nuevo ID es el mayor + 1
}
