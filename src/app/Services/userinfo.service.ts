import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  constructor(private _HttpClient: HttpClient) { }

  Token:string = `Bearer ${localStorage.getItem('token')}`


  GetUserData(): Observable<any> {
    return this._HttpClient.get(
      `https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/auth/LoginUser`,
      {
        headers: new HttpHeaders({
          Authorization: this.Token,
        })
      }
    );
  }



}