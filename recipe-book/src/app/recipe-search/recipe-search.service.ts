import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeSearchService {

  constructor() { }

  getRecipes(query: string) {

    // protocol://domain/path/path/path?queryparamname=queryparamvalue&queryparamname2=queryparamvalue2
    const searchUrl = 'http://food2fork.com/api/search?key=36715c5f7020476465b158a51c1c6304&q=' + query;

    // http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

    const obj: RequestInit = {
      method: 'GET',
      mode: 'no-cors'
    };

    return fetch(searchUrl, obj)
      //  .then(res => console.log(res))
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const RECIPES = [];

        //  res.forEach(item => {
        //   RECIPES.push(new Recipe(
        //     item.id,
        //     item.url,
        //     item.label,
        //     item.image,
        //     item.ingredientLines,
        //     item.healthLabels));
        // });

        // resolve(RECIPES);
        return RECIPES;
      });
  }
}
