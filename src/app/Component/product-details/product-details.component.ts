import { Product, Category } from './../../Sheared/Interfaces/product';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from "../Sheared-Components/product-cart/product-cart.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCartComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'] // Notice it's "styleUrls" (plural)
})
export class ProductDetailsComponent implements OnInit { // Implements OnInit to use the ngOnInit lifecycle hook

  constructor(private _ActivatedRoute: ActivatedRoute , 
    private _ProductService: ProductService, private _Router:Router 
    , private _Renderer2:Renderer2 , private toastr: ToastrService
  ) { }

  ProductId!: string | null;
  Product: Product = {} as Product;
  relatedProducts: Product[] = [];

  quantity: number = 1; 
  increaseQuantity(): void {
    this.quantity++;
  }
  decreaseQuantity(): void {
    if (this.quantity > 1){
      this.quantity--;
    }
  }

  AddToCart(ProductId: string ): void {
 
    this._ProductService.AddProductToCart(ProductId , this.quantity ).subscribe({
      next: (response) => {
        this.toastr.success('Click to go to cart', response.message).onTap.subscribe(() => {
          this._Router.navigate(['/cart']);});
      } , error: (err) => {
        if (err.message === 'Not authorized, token failed') {
          this._Router.navigate(['/login'])
        }
      }
      })
  
}

AddToFav(ProductId: string ): void {
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
}

  ngOnInit(): void {
    // for the Product Details
    this._ProductService.GetProductDetails(this._ActivatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: (response) => {
        this.Product = response.data
      } , error: (err) => {
        console.log(err);
      }
      })

    this._ProductService.GetRelatedProduct(this._ActivatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: (response) => {
        this.relatedProducts = response.data
        console.log(this.relatedProducts);
      } , error: (err) => {
        console.log(err);
      }
      })

  }
}