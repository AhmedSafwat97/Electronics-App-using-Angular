import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule , RouterModule ],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  constructor(private _ProductService: ProductService) { }

  Orders: any = []

  ngOnInit(): void {

    this._ProductService.GetOrdersProducts().subscribe({

      next: (response) => {
        this.Orders = response.orders.reverse();
      }, 
      error: (err) => {
        console.log(err);
      }


    })



  }
  



}
