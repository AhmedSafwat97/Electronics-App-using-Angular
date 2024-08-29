import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient: HttpClient) { }
  Token:string = `Bearer ${localStorage.getItem('token')}`


  MakePayment(CartId: any, Quantity: Number): Observable<any> {
    return this._HttpClient.post(
      `https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/paymob/${CartId}`,
      {}, // The body is empty
      {
        headers: new HttpHeaders({
          Authorization: this.Token,
          productid: ProductId,
          quantity: Quantity.toString() // Ensure quantity is a string, as headers expect string values
        })
      }
    );
  }





}
