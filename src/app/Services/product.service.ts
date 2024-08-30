import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  Token:string = `Bearer ${localStorage.getItem('token')}`

  CartItems : BehaviorSubject<any> = new BehaviorSubject(0);
  
  GetAllProduct(Limit:number=8 , Page:number=1  ):Observable<any>{
    return this._HttpClient
    .get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?page=${Page}&limit=${Limit}`)
  }

  filterProduct(name:any= null , categoryName:any = '' , brandName:any = null , maxPrice:any=null , minPrice:any=null ):Observable<any>{
    return this._HttpClient
    .get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?name=${name}&categoryName=${categoryName}&brandName=${brandName}&maxPrice=${maxPrice}&minPrice=${minPrice}`)
  }

  GetSaleProduct(Limit?:number , Page?:number):Observable<any>{
    return this._HttpClient
    .get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/sale/discount?page=${Page ? Page : 1 }&limit=${Limit ? Limit : 8}`)
  }

  GetBestseller():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/best/seller?limit=4')
  }

  GetAllCategories():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/categories')
  }

  GetCategoryBrand(CategoryID:string):Observable<any>{
    return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Categorybrands/${CategoryID}`)
  }


  GetAllBrands():Observable<any>{
    return this._HttpClient.get('https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Brand')
  }


  GetProductDetails(productId:any):Observable<any>{
    return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/${productId}`)
  }

  GetRelatedProduct(productId:any):Observable<any>{
    return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/product/related/${productId}`)
  }

  AddProductToCart(ProductId: any, Quantity: Number): Observable<any> {
    return this._HttpClient.post(
      `https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/`,
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

  GetCartProducts():Observable<any>{
    return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/` , {

      headers: new HttpHeaders({
        Authorization: this.Token,
      })


    })
  }

  RemoveCartProducts(ProductId: any):Observable<any>{
    return this._HttpClient.delete(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/` , {

      headers: new HttpHeaders({
        Authorization: this.Token,
        ProductId : ProductId
      })


    })
  }

  AddProductToFav(ProductId: any): Observable<any> {
    return this._HttpClient.post(
      `https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Wishlist`,
      {}, // The body is empty
      {
        headers: new HttpHeaders({
          Authorization: this.Token,
          productid: ProductId,
        })
      }
    );
  }

  RemoveProductFromFav(ProductId: any): Observable<any> {
    return this._HttpClient.delete(
      `  https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Wishlist/`, 
      {
        headers: new HttpHeaders({
          Authorization: this.Token,
          productid: ProductId,
        })
      }
    );
  }

  GetFavProducts():Observable<any>{
    return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Wishlist/` , {

      headers: new HttpHeaders({
        Authorization: this.Token,
      })


    })
  }


}
