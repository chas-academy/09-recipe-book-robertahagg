import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-search/recipe';
import { SavedRecipesService } from './saved-recipes.service';
import { SavedRecipe } from './saved-recipe';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  recipes: SavedRecipe[];

  savedRecipesService: SavedRecipesService;

  constructor(savedRecipesService: SavedRecipesService) {
    this.savedRecipesService = savedRecipesService;
  }

  // Motsvarar ovanstående
  // constructor(private savedRecipesService: SavedRecipesService) {}

  ngOnInit() {
    this.recipes = this.savedRecipesService.getLists();
  }
}
