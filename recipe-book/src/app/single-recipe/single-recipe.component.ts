import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-search/recipe';
import { ActivatedRoute } from '@angular/router';
import { SavedRecipesService } from '../saved-recipes/saved-recipes.service';

const CREDENTIAL_PARAMETERS =
  '_app_id=f6f7dfda&_app_key=7169fc8254750eb59d52c7603b5131ab';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private savedRecipesService: SavedRecipesService
  ) {}

  ngOnInit() {
    this.loadRecipe();
  }

  private loadRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.getRecipe(id).then((result) => {
      this.recipe = result;
      console.log(result);
    });
  }

  private getRecipe(recipeId: number | string) {
    return fetch(
      `http://api.yummly.com/v1/api/recipe/${recipeId}?${CREDENTIAL_PARAMETERS}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        const recipe = new Recipe(
          res.id,
          res.name,
          res.images[0].hostedLargeUrl,
          res.sourceRecipeUrl,
          res.ingredientLines,
          res.totalTime
        );

        return recipe;
      });
  }

  private saveRecipe(id: string, name: string) {
    this.savedRecipesService.addRecipeToList(id, name);
  }
}
