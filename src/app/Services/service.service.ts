import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  token:any;

  constructor(private http:HttpClient) { this.token=sessionStorage.getItem('token')}

  baseUrl="http://localhost:8080/user";

  addUsers(data:User){
    
    return this.http.post(`${this.baseUrl}/add`,data);
  }

  getUserByUsername(em:string){
    let t=this.token=sessionStorage.getItem('token')

    const tokenStr = 'Bearer ' + t;
    const headers = new HttpHeaders().set("Authorization", tokenStr);

    return this.http.get<User>(`${this.baseUrl}/get/${em}`, { headers, responseType: 'json' });
  }

  getUserById(id:number){
    return this.http.get<User>(`${this.baseUrl}/gett/${id}`);
  }

  
}
