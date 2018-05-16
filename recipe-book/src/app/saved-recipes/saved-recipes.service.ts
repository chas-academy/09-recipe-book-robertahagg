import { Injectable } from '@angular/core';
import { SavedRecipe } from './saved-recipe';

@Injectable()
export class SavedRecipesService {
  recipes: SavedRecipe[];

  constructor() {
    this.recipes = [
      new SavedRecipe('apple123', 'Äpple'),
      new SavedRecipe('pear', 'Päron')
    ];
  }

  getLists() {
    return this.recipes;
  }

  addRecipeToList(id: string, name: string) {
    this.recipes.push(new SavedRecipe(id, name));
  }
}
