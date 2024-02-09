import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  apiEndPoint: string = "http://localhost:8080/foods/";

  orderApi:string ="http://localhost:8080/order/"

  cartApi:string="http://localhost:8080/cart/";

  authRequest: any = {
    "username": "Athul",
    "password": "123"
  };

  constructor(private http: HttpClient) { }

  getAllFoods(token: any): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);

    return this.http.get(this.apiEndPoint + "get", { headers, responseType: 'json' });
  }

  orderFoods(orderRequest) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    return this.http.post(this.orderApi + 'add', orderRequest, { headers });
  }
  

  getAllOrderedFoods(username :string){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    return this.http.get(this.orderApi+'get/'+username ,{headers});
  }


  addToCart(orderRequest){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    return this.http.post(this.cartApi + 'add', orderRequest, { headers });
  }

  showCart(username:string){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    return this.http.get(this.cartApi+'getAll/'+username ,{headers});

  }
}
