import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeSearchComponent },
  { path: 'recipe/:id', component: SingleRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
