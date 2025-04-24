import RecipeItem from "../src/model/RecipeItem";
import RecipeCollection from "../src/model/RecipeCollection";
import RecipeTemplate from "../src/templates/RecipeTemplate";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

// obtener todos mis elementos del DOM
const recipeContainer = document.getElementById(
  "recipeContainer"
) as HTMLElement;

const form = document.getElementById("recipeEntryForm") as HTMLFormElement;
const titleInput = document.getElementById("recipeTitle") as HTMLInputElement;
const ingredientsInput = document.getElementById(
  "ingredients"
) as HTMLTextAreaElement;

const instructionsInput = document.getElementById(
  "instructions"
) as HTMLTextAreaElement;

// crear las instancias de las clases RecipeCollection and RecipeTemplate
const collection = new RecipeCollection([]);
const template = new RecipeTemplate(recipeContainer);

// Cargar recetas de localStorage al inicio
collection.loadFromLocalStorage();
template.displayRecipeCards(collection.getRecipes(), collection); // Mostrar recetas cargadas

// Manejar envío del formulario para agregar recetas
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const ingredients = ingredientsInput.value.trim().split("\n");
  const instructions = instructionsInput.value.trim();

  // crear una nueva receta
  const newRecipe = new RecipeItem(
    uuidv4(),
    title,
    ingredients,
    instructions,
    false
  );

  // agregar a la colección y guardar
  collection.addRecipes(newRecipe);
  collection.saveToLocalStorage();

  template.displayRecipeCards(collection.getRecipes(), collection); // volver a mostrar todo actualizado

  form.reset(); // limpiar el formulario
});

// botón para limpiar todas las recetas
const clearButton = document.getElementById(
  "clearRecipesButton"
) as HTMLButtonElement;
clearButton.addEventListener("click", () => {
  collection["arrRecipeItems"] = []; // vaciar
  collection.saveToLocalStorage();
  template.displayRecipeCards(collection.getRecipes(), collection);
});
