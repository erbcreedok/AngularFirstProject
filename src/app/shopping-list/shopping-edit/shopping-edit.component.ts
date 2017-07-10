import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientNameInput: ElementRef;
  @ViewChild('amountInput') ingredientAmountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdded() {
    this.shoppingListService.addIngredient(
        new Ingredient(
          this.ingredientNameInput.nativeElement.value,
          this.ingredientAmountInput.nativeElement.value
        )
    );
    return false;
  }
}
