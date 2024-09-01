import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from './../../Services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../Sheared/Interfaces/product';
import { ProductCartComponent } from "../Sheared-Components/product-cart/product-cart.component";
import { Category } from '../../Sheared/categorry';
import { SpinnerService } from '../../Services/spinner.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    ProductCartComponent , 
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductService: ProductService , private _Spinner : SpinnerService) { }

  BannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  SaleProduct: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    } ,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
  };

  activeIndices: Set<number> = new Set<number>(); // To keep track of active indices
  items = [/* Your data here */]; // Example array of items

  // Method to check if the index is active
  isActive(index: number): boolean {
    return this.activeIndices.has(index);
  } 
  IsFav: boolean = false ;
  // Method to toggle the active state
  toggleActive(index: number) {
    if (this.activeIndices.has(index)) {
      this.activeIndices.delete(index); // Remove from active state if already active
    } else {
      this.activeIndices.add(index); // Add to active state if not active
      this.IsFav = true ;
    }
  }
  slidesStore: any[] = [
    { src: '../../../assets/bannars/1.jpeg' },
    { src: '../../../assets/bannars/2.jpeg' },
    { src: '../../../assets/bannars/3.jpeg' },
  ]
  

  saleProducts: Product[] = [] ;
  BesSeller: Product[] = [] ;
  AllProduct: Product[] = [] ;
  Categories: Category[] = [] ;


  fullStars: number[] = [];
  emptyStars: number[] = [];


  Discount(Price: number, PriceBeforeDiscount: number): number {
    if (PriceBeforeDiscount === 0) {
      throw new Error("PriceBeforeDiscount cannot be zero.");
    }
    return Math.trunc(100 - (Price / PriceBeforeDiscount) * 100);
  }

  //All Products
  ngOnInit(): void {


    this._Spinner.show()


    this._ProductService.GetAllProduct().subscribe({
      next: (response) => {
        this.AllProduct = response.data
        this._Spinner.hide()
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });

    // Bestseller
    this._ProductService.GetBestseller().subscribe({
      next: (response) => {
        this.BesSeller = response.data
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });

    this._ProductService.GetSaleProduct().subscribe({
      next: (response) => {
        this.saleProducts = response.data
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });

    this._ProductService.GetAllCategories().subscribe({
      next: (response) => {
        this.Categories = response.data
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });

  }


}