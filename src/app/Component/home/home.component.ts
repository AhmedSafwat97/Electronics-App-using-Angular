import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from './../../Services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../Sheared/Interfaces/product';
import { ProductCartComponent } from "../Sheared-Components/product-cart/product-cart.component";
import { Category } from '../../Sheared/categorry';

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

  constructor(private _ProductService: ProductService) { }

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
        items: 1
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

  slidesStore: any[] = [
    { src: './assets/bannars/2.jpg' },
    { src: './assets/bannars/3.jpg' },
    { src: './assets/bannars/4.jpg' },
  ]
  

  saleProducts: Product[] = [] ;
  BesSeller: Product[] = [] ;
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
    this._ProductService.GetAllProduct().subscribe({
      next: (response) => {
        // console.log(response.data);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });

    // Bestseller
    this._ProductService.GetBestseller().subscribe({
      next: (response) => {
        this.BesSeller = response.data
        console.log(this.BesSeller);
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