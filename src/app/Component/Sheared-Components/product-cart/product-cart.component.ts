import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../../../Sheared/Interfaces/product';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent implements OnInit {

  constructor(private _ProductService: ProductService ,
     private _Router: Router , 
     private _Renderer2:Renderer2 , private toastr: ToastrService) { }

  @Input() Product!: Product; 
  @Input() i!: number;
  Quantity: number = 0;
  isLogin : boolean = false;
  activeIndices: Set<number> = new Set<number>(); // To keep track of active indices
  items = [/* Your data here */]; // Example array of items

  isActive(index: number): boolean {
    return this.activeIndices.has(index);
  } 
  IsFav: boolean = false ;
  // Method to toggle the active state
  toggleActive(index: number , ) {
    if (this.activeIndices.has(index)) {
      this.activeIndices.delete(index); // Remove from active state if already active
      this.RemoveFromFav(this.Product._id)
      console.log("delete");
    } else {
      this.activeIndices.add(index); // Add to active state if not active
      this.IsFav = true ;
      this.AddToFav(this.Product._id)
      console.log("add");

    }

// Product added to wishlist successfully



  }

  Discount(Price: number, PriceBeforeDiscount: number): number {
    if (PriceBeforeDiscount === 0) {
      throw new Error("PriceBeforeDiscount cannot be zero.");
    }
    return Math.trunc(100 - (Price / PriceBeforeDiscount) * 100);
  }

  AddToCart(ProductId: string , addToCart: any): void {
    this.Quantity++;
    if (this.isLogin) {
      this._Renderer2.setAttribute(addToCart , 'disabled' , 'true')
      this._ProductService.AddProductToCart(ProductId , this.Quantity ).subscribe({
        next: (response) => {
          this.toastr.success('Click to go to cart', response.message).onTap.subscribe(() => {
            this._Router.navigate(['/cart']);});
  
            if (response.message === 'Product added successfully') {
              this._ProductService.CartItems.next(response.totalQuantity)
  
              console.log(this._ProductService.CartItems);
            }
  
        },  error: (err) => {
          if (err.message === 'Not authorized, token failed') {
            this._Router.navigate(['/login'])
          }
        } })
    } else {
      this._Router.navigate(['/login'])
    }
  }



  AddToFav(ProductId: string ): void {
    this.Quantity++;

    if (this.isLogin) {
      this._ProductService.AddProductToFav(ProductId).subscribe({
        next: (response) => {
  
          this.toastr.success('Click to go to wishlist', response.message).onTap.subscribe(() => {
            this._Router.navigate(['/wishlist']);});
          console.log(response);
  
  
        },  error: (err) => {
          if (err.message === 'Not authorized, token failed') {
            this._Router.navigate(['/login'])
          }
        } })
    } else {
      this._Router.navigate(['/login'])
    }

  }


  RemoveFromFav(ProductId: string ): void {
    this.Quantity++;
    if (this.isLogin) {
      this._ProductService.RemoveProductFromFav(ProductId).subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success('Click to go to wishlist', response.message).onTap.subscribe(() => {
            this._Router.navigate(['/wishlist']);});
        },  error: (err) => {
          if (err.message === 'Not authorized, token failed') {
            this._Router.navigate(['/login'])
          }
        } })
    } else {
      this._Router.navigate(['/login'])
    }
  }

  LoginUser() {
    if (localStorage.getItem('token')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
    return this.isLogin
  }


  ngOnInit(): void {

    this.LoginUser()




   }


}
