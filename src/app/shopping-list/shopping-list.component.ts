import { ShoppingListService } from './shopping.service';
import { Ingredient } from './ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingList: ShoppingListService) {}
  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredient();
    this.shoppingList.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }
}
