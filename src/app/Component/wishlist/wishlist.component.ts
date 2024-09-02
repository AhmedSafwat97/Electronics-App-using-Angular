import { Component, Renderer2 } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from '../Sheared-Components/product-cart/product-cart.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../../Services/spinner.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule , ProductCartComponent , RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  constructor(private _ProductService: ProductService ,
    private _Router: Router , 
    private _Renderer2:Renderer2 , private toastr: ToastrService , private _Spinner: SpinnerService) { }

  Wishlist:any[] = []
  Quantity: number = 0;


  ngOnInit(): void {
    this._Spinner.show()
    this._ProductService.GetFavProducts().subscribe({
      next: (response) => {
        this.Wishlist = response.data.items
        if (!response || !response.orders || response.orders.length === 0) {
          this._Spinner.hide(); 
        } else {
          this._Spinner.hide();
        }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }



  Discount(Price: number, PriceBeforeDiscount: number): number {
    if (PriceBeforeDiscount === 0) {
      throw new Error("PriceBeforeDiscount cannot be zero.");
    }
    return Math.trunc(100 - (Price / PriceBeforeDiscount) * 100);
  }


  AddToCart(ProductId: string , addToCart: any): void {
    this.Quantity++;
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
  }



  RemoveFromFav(ProductId: string ): void {

this._Spinner.show()
    this._ProductService.RemoveProductFromFav(ProductId).subscribe({
      next: (response) => {
        this.Wishlist = response.data.items
        response ? this._Spinner.hide() : this._Spinner.hide()
        if (this.Wishlist.length === 0) {
          this._Router.navigate(['/home'])
        }


      },  error: (err) => {
        if (err.message === 'Not authorized, token failed') {
          this._Router.navigate(['/login'])
        }
      } })
  }




}
