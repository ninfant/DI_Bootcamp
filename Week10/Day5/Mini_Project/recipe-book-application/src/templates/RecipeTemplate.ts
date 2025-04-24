import RecipeItem from "../model/RecipeItem";
import RecipeCollection from "../model/RecipeCollection";

/** This class se encarga de manejar toda la interfaz visual (DOM) de las recetas,
 *recibe datos (recetas) y los convierte en HTML para mostrar en la pantalla
 */
class RecipeTemplate {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public displayRecipeCards(
    recipes: RecipeItem[],
    collection: RecipeCollection
  ): void {
    this.container.innerHTML = "";

    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");

      card.innerHTML = `
      <h2>${recipe.titlee}</h2>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> ${
        recipe.instructions || "No instructions provided."
      }</p>
      <button class="favorite-btn" data-id="${recipe.getId()}">
        ${recipe.isFavorite ? "★ Favorite" : "☆ Mark Favorite"}
      </button>
      <button class="delete-btn" data-id="${recipe.getId()}">Delete</button>
    `;

      const favoriteBtn = card.querySelector(
        ".favorite-btn"
      ) as HTMLButtonElement;
      this.attachFavoriteEvent(favoriteBtn, recipe, collection);
      const deleteBtn = card.querySelector(".delete-btn") as HTMLButtonElement;
      this.attachDeleteEvent(deleteBtn, recipe, collection);

      this.container.appendChild(card);
    });
  }

  private attachFavoriteEvent(
    favoriteBtn: HTMLButtonElement,
    recipe: RecipeItem,
    collection: RecipeCollection
  ): void {
    favoriteBtn.addEventListener("click", () => {
      const recipeId = recipe.getId();
      collection.toggleFavoriteStatus(recipeId); // Cambiar favorito en datos
      collection.saveToLocalStorage(); // Guardar cambios
      this.displayRecipeCards(collection.getRecipes(), collection); // Volver a mostrar
    });
  }
  private attachDeleteEvent(
    deleteBtn: HTMLButtonElement,
    recipe: RecipeItem,
    collection: RecipeCollection
  ): void {
    deleteBtn.addEventListener("click", () => {
      const recipeId = recipe.getId();
      collection.removeRecipes(recipeId); // delete recipe
      collection.saveToLocalStorage(); // Guardar cambios
      this.displayRecipeCards(collection.getRecipes(), collection); // Volver a mostrar
    });
  }
}

export default RecipeTemplate;
