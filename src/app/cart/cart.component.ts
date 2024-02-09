import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private foodService:FoodService){}

  cartFoods:any;

  ngOnInit(): void {
      let username=sessionStorage.getItem('username');

      this.foodService.showCart(username).subscribe(result=>{
        this.cartFoods=result;
      })
  }
}
