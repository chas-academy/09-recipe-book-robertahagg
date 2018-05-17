import { Injectable, ChangeDetectorRef } from '@angular/core';
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

  deleteRecipeFromList = function(id) {
    console.log('deleteRecipeFromList');

    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === id) {
        this.recipes.splice(i, 1);
        return;
      }
    }
  };
}
