import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Filter } from './filter';

const CREDENTIAL_PARAMETERS =
  '_app_id=f6f7dfda&_app_key=7169fc8254750eb59d52c7603b5131ab';

@Injectable()
export class RecipeSearchService {
  constructor() {}

  getRecipes(
    query: string,
    mealTypeFilters: Filter[],
    allergenTypeFilters: Filter[],
    cookingTypeFilters: Filter[]
  ) {
    let filterQueryParameters = '';

    const handleFilter = (filter) => {
      if (filter.enabled) {
        filterQueryParameters =
          filterQueryParameters + '&' + filter.yummliquery;
      }
    };

    mealTypeFilters.forEach(handleFilter);
    allergenTypeFilters.forEach(handleFilter);
    cookingTypeFilters.forEach(handleFilter);

    // Problem with CORS stopped me from using food2forks and Edamans API
    const searchUrlYummly =
      'http://api.yummly.com/v1/api/recipes?' +
      CREDENTIAL_PARAMETERS +
      '&q=' +
      query;
    const searchUrl =
      'http://food2fork.com/api/search?key=36715c5f7020476465b158a51c1c6304&q=' +
      query;
    const searchUrlBackup = 'http://localhost:3000/hits';

    return fetch(searchUrlYummly + encodeURI(filterQueryParameters))
      .then((res) => res.json())
      .then((res) => {
        const recipes = [];

        res.matches.forEach((item) => {
          let imgUrl;
          if (item.smallImageUrls && item.smallImageUrls.length > 0) {
            imgUrl = item.smallImageUrls[0];
          }

          recipes.push(new Recipe(item.id, item.recipeName, imgUrl));
        });

        return recipes;
      });
  }
}
