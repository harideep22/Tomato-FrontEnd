import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }


  generateToken(request): Observable<any> {
    return this.http.post("http://localhost:8080/user/authenticate", request, { responseType: 'text' as 'json' });
  }

}
