import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Services/food.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  username:string;
  orderedItems;

  totalPrice:number=0;
  constructor(private foodService:FoodService){}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.foodService.getAllOrderedFoods(this.username).subscribe(result => {
      this.orderedItems = result;
      console.log(this.orderedItems[0]);
  
      for (const ordered of this.orderedItems) {
        this.totalPrice += ordered.totalPrice;
      }
    });
  }
}
