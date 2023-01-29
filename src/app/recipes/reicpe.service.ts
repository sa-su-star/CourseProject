import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Macarona',
      'Macarona Negrisco spicy gedn , price: 300 L.E',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg?resize=1200:*',
      [new Ingredient('Phone', 15000), new Ingredient('Tablet', 89999)]
    ),
    new Recipe(
      'Macarona',
      'Macarona Negrisco Regular gedn without spicy    , price: 150 L.E',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg?resize=1200:*',
      [new Ingredient('Computer', 35999), new Ingredient('Oppo', 60000)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
