import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { 
  }

  SetRegister(data:object):Observable<any>{
    return this._HttpClient.post('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/auth/signup',data)
  }


  SetLogin(data:object):Observable<any>{
    return this._HttpClient.post('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/auth/login',data)
  }
}
