import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Sheared/Interfaces/product';
import { Spinner } from 'ngx-spinner';
import { SpinnerService } from '../../Services/spinner.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {


  constructor(private _ProductService: ProductService , 
    private _Renderer2:Renderer2 , private _Router:Router ,private _Spinner: SpinnerService) { }   

  CartProducts:any[] = []
  TotalPrice: number = 0
  Quantity:number = 1
  cartId: string = ''
  removeFromTheCart(ProductId: string): void {
      this._Spinner.show()
    this._ProductService.RemoveCartProducts(ProductId).subscribe({
      next: (response) => {

        if (response.message === 'Product removed successfully') {
          this.CartProducts = response.data.items;
          this.TotalPrice = response.totalPrice
          this._ProductService.CartItems.next(this.CartProducts.length)
          response? this._Spinner.hide() : this._Spinner.show()
        }
        if (this.CartProducts.length === 0) {
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {
        console.log(err);
      }
    })}
    IncrementQuantity(Product:any , element1:any): void {
      Product.quantity += 1
      this.UpdateCartItem(Product)
      console.log(Product.quantity)
    }

    DecrementQuantity(Product:any , element2:any): void {
      if (Product.quantity > 1 ) {
        Product.quantity -= 1
        this.UpdateCartItem(Product)
      } else {
        this._Renderer2.setAttribute(element2 , 'disabled' , 'true')
      }
    }

    UpdateCartItem(Product:any): void {
      this._ProductService.AddProductToCart(Product.product._id , Product.quantity ).subscribe({
        next: (response) => {
          console.log(response.message);
        }
      
      })
  
    }



  ngOnInit(): void {
    this._Spinner.show()

    this._ProductService.GetCartProducts().subscribe({
      next: (response) => {
        this.CartProducts = response.data.items
        this.TotalPrice = response.totalPrice
        this.cartId = response.data._id
        response ? this._Spinner.hide() : this._Spinner.show()
      },
      error: (err) => {
        console.log(err);
      }
    })

  }




}
