import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';
import { JwtClientService } from '../Services/jwt-client.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent implements OnInit{
  authRequest: { username: string; password: string; };

  constructor(private fb:FormBuilder,private service:ServiceService,private router:Router,private jwt:JwtClientService){}

  signInForm=this.fb.group({
    username:[''],
    password:['']
  })

  onSubmit(){
    const username=this.signInForm.value.username;
    const password=this.signInForm.value.password;
    console.log(username)
    console.log(password);

    this.authRequest = { username: username, password: password };
    

    // this.service.getUserByEmail(email).subscribe(response=>{
      
    //   if(response.password==password){
    //     sessionStorage.setItem('email',email as string);
    //     this.router.navigate(['/home']);
    //   }
    // })

    this.jwt.generateToken(this.authRequest).subscribe(res=>{
      console.log(res);
      sessionStorage.setItem('token',res as string);
      sessionStorage.setItem('username',username as string);
      
      this.router.navigate(['/home']);
    })
  }

  ngOnInit(): void {
    
  }

}
