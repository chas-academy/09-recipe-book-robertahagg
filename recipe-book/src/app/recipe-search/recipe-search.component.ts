import { Component, OnInit } from '@angular/core';
import { RecipeSearchService } from './recipe-search.service';
import { Recipe } from './recipe';
import { Filter } from './filter';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes: Recipe[];

  mealTypeFilters: Filter[] = [
    new Filter('Breakfast'),
    new Filter('Lunch'),
    new Filter('Dinner'),
    new Filter('Dessert')];

  AllergenTypeFilters: Filter[] = [
    new Filter('Fish'),
    new Filter('Egg'),
    new Filter('Dairy'),
    new Filter('Wheat'),
    new Filter('Gluten'),
    new Filter('Nuts')];

  CookingTypeFilters: Filter[] = [
    new Filter('15-min'),
    new Filter('30-min'),
    new Filter('60-min'),
    new Filter('over-60-min')];

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {
    this.recipes = [];
  }

  search(query: string): void {
    query = query.trim();
    if (!query) { return; }

    const getRecipesPromise = this.recipeSearchService.getRecipes(query);

    getRecipesPromise.then(resultList => this.recipes = resultList);
  }
}
