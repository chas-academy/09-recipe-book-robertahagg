import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';






@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    SavedRecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
