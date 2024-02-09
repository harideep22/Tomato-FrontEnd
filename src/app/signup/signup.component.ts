import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor(private fb:FormBuilder,private service:ServiceService,private router:Router){}

  signUpForm=this.fb.group({
    username:[''],
    email:[''],
    password:[''],
    repassword:['']
  })

  ngOnInit(): void {
      
  }

  onSubmit(){
    // console.log(this.signUpForm.value);
    const userDetails={...this.signUpForm.value};
    delete userDetails.repassword;
    this.service.addUsers(userDetails as User).subscribe(data=>{
      this.router.navigate(['/signin'])
    });
  }

}
