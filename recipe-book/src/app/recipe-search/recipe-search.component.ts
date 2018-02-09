import { Component, OnInit } from '@angular/core';
import { RecipeSearchService } from './recipe-search.service';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {
    this.recipes = [];
  }

  search(query: string): void {
    query = query.trim();
    if (!query) { return; }

    this.recipeSearchService.getRecipes(query);
  }
}
