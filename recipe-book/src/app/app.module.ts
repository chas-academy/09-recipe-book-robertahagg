import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { RecipeSearchService } from './recipe-search/recipe-search.service';






@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    SavedRecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecipeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
