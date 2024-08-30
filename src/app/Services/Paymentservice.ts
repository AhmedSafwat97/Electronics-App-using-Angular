import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient: HttpClient) { }

  baseLink:string = "http://localhost:4200"



  Token:string = `Bearer ${localStorage.getItem('token')}`


  MakePayment(CartId: any, Data : object): Observable<any> {
    return this._HttpClient.post(
      `https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/paymob/${CartId}?baseFrontServer=${encodeURIComponent(this.baseLink)}`,
      Data , // The body is empty
      {
        headers: new HttpHeaders({
          Authorization: this.Token,
        })
      }
    );
  }
}
