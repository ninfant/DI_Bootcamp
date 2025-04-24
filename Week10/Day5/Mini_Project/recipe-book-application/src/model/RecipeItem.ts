class RecipeItem {
  constructor(
    private id: string,
    public titlee: string,
    public ingredients: string[],
    public instructions: string,
    public isFavorite: boolean
  ) {
    this.id = id;
    this.titlee = titlee;
    this.ingredients = ingredients;
    this.isFavorite = isFavorite;
    this.instructions = instructions;
  }
  getId(): string {
    return this.id;
  }
  setGetId(val: string): void {
    this.id = val;
  }
}

export default RecipeItem;
