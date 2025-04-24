import RecipeItem from "./RecipeItem";

class RecipeCollection {
  private arrRecipeItems: RecipeItem[] =
    []; /**Since RecipeCollection is going to manage many recipes, and each recipe is a RecipeItem, the array should be of type RecipeItem[] */

  constructor(arrRecipeItems: RecipeItem[]) {
    this.arrRecipeItems = arrRecipeItems;
  }
  public getRecipes(): RecipeItem[] {
    return this.arrRecipeItems;
  }

  public addRecipes(recipe: RecipeItem): void {
    this.arrRecipeItems.push(recipe);
  }
  public removeRecipes(id: string): void {
    this.arrRecipeItems = this.arrRecipeItems.filter(
      (item) => item.getId() !== id
    );
  }
  public toggleFavoriteStatus(id: string): void {
    const recipe = this.arrRecipeItems.find((item) => item.getId() === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite; //Invierte el valor booleano automáticamente
    }
  }

  public saveToLocalStorage(): void {
    const data = JSON.stringify(this.arrRecipeItems); // convertir a string
    localStorage.setItem("recipes", data); //guardar en localStorage ese string con una clave ("recipes")
  }

  public loadFromLocalStorage(): void {
    const data = localStorage.getItem("recipes"); // leer los datos guardados,es decir recupera ese string del navegador
    if (data) {
      const parsedData =
        JSON.parse(
          data
        ); /**convertir de vuelta a array de objetos. Al cargarlos, vuelven como objetos planos es decir sin métodos
          debido al paso anterior, este siguiente paso es para reconstruir las instancias y poder acceder a los metodos de esta clase:*/
      this.arrRecipeItems = parsedData.map(
        (item: any) =>
          new RecipeItem(
            item.id,
            item.titlee,
            item.ingredients,
            item.isFavorite,
            item.instructions
          )
      );
    }
  }
}

export default RecipeCollection;
