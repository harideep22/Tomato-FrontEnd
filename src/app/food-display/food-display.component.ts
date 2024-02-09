import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Services/food.service';
import { Router } from '@angular/router';
import { JwtClientService } from '../Services/jwt-client.service';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {

  foods: any;
  value: string = "";
  selectedQuantity: number | null = null;
  token: any;

  constructor(private foodService: FoodService, private router: Router,private jwt:JwtClientService,private toast:NgToastService) { }



  ngOnInit(): void {
    this.token=sessionStorage.getItem('token');
    this.getAllFoods();

  }

  getAllFoods() {
    this.foodService.getAllFoods(this.token).subscribe(result => {
      this.foods = result;
      // console.log(this.foods);
      if (this.foods.length > 3) {
        this.foods.splice(3, 1);
      }
    });
  }

  get filteredFoods() {
    if (this.value === '') {
      return this.foods;
    } else {
      return this.foods.filter(food =>
        food.categoryName.toLowerCase().includes(this.value.toLowerCase())
      );
    }
  }

  onQuantitySelected(value: string) {
    this.selectedQuantity = value !== '0' ? parseInt(value, 10) : null;
    // console.log(this.selectedQuantity);
  }

  onClc(id: number) {
    let username = sessionStorage.getItem('username');

    let orderRequest: any = {
      "username": username,
      "foodId": id,
      "quantity": this.selectedQuantity
    };

    this.foodService.orderFoods(orderRequest).subscribe(result => {
      // Show Toastr notification on successful order
      this.toast.success({detail:"Success Message",summary:"Order is Successfull",duration:5000})
    },err=>{
      this.toast.error({detail:"Error Message",summary:"Order is Failed",duration:5000})
    });
  }

  onCart(id:number){
    let username=sessionStorage.getItem('username');
    let orderRequest:any={
      "username": username,
      "foodsId": id,
      "quantity": this.selectedQuantity
    };
    this.foodService.addToCart(orderRequest).subscribe(result => {
      // Show Toastr notification on successful order
      this.toast.success({detail:"Success Message",summary:"Successfully added to Cart",duration:5000})
    },err=>{
      this.toast.error({detail:"Error Message",summary:"Failed to add Cart",duration:5000})
    });



  }
}
