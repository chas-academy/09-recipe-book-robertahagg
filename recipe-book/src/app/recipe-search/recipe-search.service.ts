import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeSearchService {

  constructor() { }

  getRecipes(query: string) {

    // Problem with CORS stopped me from using food2forks and Edamans API
    const searchUrl = 'http://food2fork.com/api/search?key=36715c5f7020476465b158a51c1c6304&q=' + query;
    const searchUrlBackup = 'http://localhost:3000/hits';

    return fetch(searchUrlBackup)

      .then(res => res.json())
      .then(res => {
        console.log(res);
        const recipes = [];

        res.forEach(item => {
          recipes.push(new Recipe(item.image));
        });

        return recipes;
      });
  }
}
