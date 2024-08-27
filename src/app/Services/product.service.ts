import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }


  GetAllProduct():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?page=1&limit=4')
  }

  GetSaleProduct():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/sale/discount')
  }


  GetBestseller():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/best/seller')
  }


  GetAllCategories():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/categories')
  }



}
