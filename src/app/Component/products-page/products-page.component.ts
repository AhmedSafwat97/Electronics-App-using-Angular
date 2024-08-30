import { Category } from './../../Sheared/Interfaces/product';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCartComponent } from '../Sheared-Components/product-cart/product-cart.component';
import { Product } from '../../Sheared/Interfaces/product';
import { NgxPaginationModule } from 'ngx-pagination';
import { Brand } from '../../Sheared/brand';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    ProductCartComponent , 
    NgxPaginationModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder ,private _ActivatedRoute: ActivatedRoute , private _ProductService: ProductService) { }

  Products:Product[] = []
  pageSize: number = 12
  CurrentPage: number = 1
  total: number = 20
  pageLimit: number = 8
  pageName:string = "AllProducts"
  Brands:Brand[] = []
  Category:any[] = []
  selectedCategory: string = ''; // Variable to hold the selected value
  selectedBrand: string = ''; // Variable to hold the selected value

  CId:string = '';
  CName:string = '';


  filterForm : FormGroup = this._formBuilder.group({
    productName: [''],
    selectedCategory: [''],
    selectedBrand: [''],
    minPrice: [''],
    maxPrice: ['']
  });


  PathName?:any = this._ActivatedRoute.snapshot.paramMap.get('PathName') 

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    const [id, name] = selectedValue.split(':');

    this.CId = id
    this.CName = name
    this._ProductService.GetCategoryBrand(id).subscribe({
      next: (response) => {
        this.Brands = response
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    })

  }



  onSubmit() {

    this._ProductService.filterProduct(this.filterForm.value.productName , this.CName ,this.filterForm.value.selectedBrand , this.filterForm.value.maxPrice , this.filterForm.value.minPrice).subscribe({
      next: (response) => {
        this.Products = response.data
        this.pageSize = this.pageLimit
        this.CurrentPage = response.PageNumber
        this.total = response.TotalProducts
        this.CName = ''
        this.filterForm.value.selectedBrand = ''
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });


  }






  pageChanged(event: any) {
    if (this.PathName == "AllProducts") {
      
      this._ProductService.GetAllProduct(this.pageLimit , event).subscribe({
        next: (response) => {
          this.Products = response.data
          this.pageSize = this.pageLimit
          this.CurrentPage = response.PageNumber
          this.total = response.TotalProducts
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });

    }

    if (this.PathName == "FlashSale") {
      this._ProductService.GetSaleProduct(this.pageLimit ,event).subscribe({
        next: (response) => {
          this.Products = response.data
          this.pageSize = this.pageLimit
          this.CurrentPage = response.PageNumber
          this.total = response.TotalProducts
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });

    }

    
  }

  ngOnInit(): void {

//  for categories
    this._ProductService.GetAllCategories().subscribe({
      next: (response) => {
        this.Category = response.data
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    })


    if (this.PathName == "AllProducts") {
      
      this._ProductService.GetAllProduct().subscribe({
        next: (response) => {
          this.Products = response.data
          this.pageSize = this.pageLimit
          this.CurrentPage = response.PageNumber
          this.total = response.TotalProducts
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });

    }

    if (this.PathName == "FlashSale") {
      this._ProductService.GetSaleProduct().subscribe({
        next: (response) => {
          this.Products = response.data
          this.pageSize = this.pageLimit
          this.CurrentPage = response.PageNumber
          this.total = response.TotalProducts
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });

    }




    }



}
