import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-search/recipe';
import { SavedRecipesService } from './saved-recipes.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  recipes: String[];

  constructor(private recipeSearchService: SavedRecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeSearchService.getLists();
  }
}
