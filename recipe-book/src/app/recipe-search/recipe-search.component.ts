import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [];
  }

  search(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.recipes.push(new Recipe(name));
  }
}

class Recipe {
  id: number;
  name: string;

  constructor(public theName: string) {
    this.name = theName;
  }
  savedRecipe(recipeID: number) {

  }
}
