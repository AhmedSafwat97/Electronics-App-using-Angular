import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Sheared/Interfaces/product';
import { ProductCartComponent } from '../Sheared-Components/product-cart/product-cart.component';

@Component({
  selector: 'app-catygory-page',
  standalone: true,
  imports: [CommonModule , RouterModule , ProductCartComponent],
  templateUrl: './catygory-page.component.html',
  styleUrl: './catygory-page.component.scss'
})
export class CatygoryPageComponent implements OnInit {

  constructor(private _Router:Router , private _ProductService: ProductService ,private _ActivatedRoute:ActivatedRoute) { }


    Products:any = [] 
    Name:any = this._ActivatedRoute.snapshot.paramMap.get('Name')

  ngOnInit(): void { 
    this._ProductService.GetCategoryProducts(this._ActivatedRoute.snapshot.paramMap.get('Name')).subscribe({
      next: (response) => {
        this.Products = response.data
      } , error: (err) => {
        console.log(err);
      } 
    })


   }


}
