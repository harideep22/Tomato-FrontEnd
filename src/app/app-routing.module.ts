import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyComponent } from './buy/buy.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'signin',component:SinginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent, /*canActivate:[authGuard],*/children:[

    {path:'userProfile/:id',component:UserProfileComponent},
    {path:'cart',component:CartComponent},
    {path:'orders', component:OrdersComponent},
    {path:'buy/:id/:qnt',component:BuyComponent},
    {path:'',component:FoodDisplayComponent},
    {path:'**',component:NotFoundComponent}
  ]},

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
