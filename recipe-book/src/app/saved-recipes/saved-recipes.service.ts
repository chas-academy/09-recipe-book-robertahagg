import { Injectable } from '@angular/core';

@Injectable()
export class SavedRecipesService {
  recipes: String[];

  constructor() {
    this.recipes = ['Äpple', 'Squash'];
  }

  getLists() {
    return this.recipes;
  }

  addRecipeToList(name: String) {
    this.recipes.push(name);
  }
}
