import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dropdown, Collapse, initMDB } from 'mdb-ui-kit';
import { User } from '../interfaces/user';
import { ServiceService } from '../Services/service.service';
import { FoodService } from '../Services/food.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private actRoute:ActivatedRoute,private service:ServiceService,private foodService:FoodService){}

  
  user:User;
  username:string;

  

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    
    this.service.getUserByUsername(this.username).subscribe(result=>{
      this.user=result;
      // console.log(this.user.username);
      // console.log(this.username);
    },err=>{
      this.router.navigate(['/signin'])
    }
    )


    initMDB({ Dropdown, Collapse });
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['signin']);
  }

}
