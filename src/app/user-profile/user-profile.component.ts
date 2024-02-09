import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:ServiceService){}

  id:string;
  user: User = {  username: '', email: '' }; // Initialize with empty values

  ngOnInit(): void {
      this.id=this.router.snapshot.params['id'];
      this.service.getUserByUsername(this.id).subscribe(result=>{
        this.user=result;

        console.log(this.user.email);
      })

  }


}
