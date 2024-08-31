import { Product, Category } from './../../Sheared/Interfaces/product';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ProductCartComponent } from "../Sheared-Components/product-cart/product-cart.component";
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../../Services/spinner.service';
import { ScrollService } from '../../Services/scroll.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCartComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'] // Notice it's "styleUrls" (plural)
})
export class ProductDetailsComponent implements OnInit { // Implements OnInit to use the ngOnInit lifecycle hook

  constructor(private _ActivatedRoute: ActivatedRoute , 
   private _ScrollService: ScrollService ,
    private _ProductService: ProductService, private _Router:Router 
    , private _Renderer2:Renderer2 , private toastr: ToastrService ,  private _spinner: SpinnerService
  ) { }

  ProductId!: string | null;
  Product: Product = {} as Product;
  relatedProducts: Product[] = [];


  goTop(): void {
    this._spinner.show();
    setTimeout(() => this._ScrollService.scrollToElement('scrollTarget'), 0);   
    this._ActivatedRoute.params.subscribe(params => {
      // for the Product Details
  this._ProductService.GetProductDetails(params['id']).subscribe({
    next: (response) => {
      this.Product = response.data
      response ? this._spinner.hide() : this._spinner.show()
    } , error: (err) => {
    }
    })
});
  }


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
    this._spinner.show()
    // this.scrollToTop();
    setTimeout(() => this._ScrollService.scrollToElement('scrollTarget'), 0);   
    
     this._ActivatedRoute.params.subscribe(params => {
          // for the Product Details
      this._ProductService.GetProductDetails(params['id']).subscribe({
        next: (response) => {
          this.Product = response.data
          response ? this._spinner.hide() : this._spinner.show()
        } , error: (err) => {
        }
        })
    });

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