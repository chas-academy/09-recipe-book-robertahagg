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
    new Filter('Breakfast and Brunch', 'allowedCourse[]=course^course-Breakfast and Brunch'),
    new Filter('Lunch', 'allowedCourse[]=course^course-Lunch'),
    new Filter('Main Dishes', 'allowedCourse[]=course^course-Main Dishes'),
    new Filter('Desserts', 'allowedCourse[]=course^course-Desserts')];

  allergenTypeFilters: Filter[] = [
    new Filter('Fish', 'allowedAllergy[]=398^Seafood-Free'),
    new Filter('Egg', 'allowedAllergy[]=397^Egg-Free'),
    new Filter('Dairy', 'allowedAllergy[]=396^Dairy-Free'),
    new Filter('Wheat', 'allowedAllergy[]=392^Wheat-Free'),
    new Filter('Gluten', 'allowedAllergy[]=393^Gluten-Free'),
    new Filter('Nuts', 'allowedAllergy[]=395^Tree Nut-Free')];

  cookingTypeFilters: Filter[] = [
    new Filter('15-min', 'maxTotalTimeInSeconds=900'),
    new Filter('30-min', 'maxTotalTimeInSeconds=1800'),
    new Filter('60-min', 'maxTotalTimeInSeconds=3600')];

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit() {
    this.recipes = [];
  }

  search(query: string): void {
    query = query.trim();
    if (!query) { return; }

    const getRecipesPromise = this.recipeSearchService.getRecipes(
      query, this.mealTypeFilters, this.allergenTypeFilters, this.cookingTypeFilters);

    getRecipesPromise.then(resultList => this.recipes = resultList);
  }
}
