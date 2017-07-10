import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken soup',
            'A chicken soup is super tasty, hot and spicy food',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [
                new Ingredient('Chicken Legs', 5),
                new Ingredient('Potatoes', 2),
                new Ingredient('Chili', 10)
            ]
        ),
        new Recipe('Chicken sandwich',
            'A fast food which can feed you the bast and a fastest way',
            'http://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/17/02/subwayovenroastedchicken.jpg?itok=dGATL5JA',
            [
                new Ingredient('Chicken Fillet', 5),
                new Ingredient('Bread', 4),
                new Ingredient('Salad', 1),
                new Ingredient('Tomatoes', 2),
                new Ingredient('Onion', 2)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipe(index: number) {
        return this.recipes[index];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
