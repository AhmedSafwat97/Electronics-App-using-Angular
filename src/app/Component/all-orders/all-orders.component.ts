import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
import { SpinnerService } from '../../Services/spinner.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule , RouterModule ],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  constructor(private _ProductService: ProductService , private _spinner: SpinnerService) { }

  Orders: any = []

  ngOnInit(): void {
    this._spinner.show()
    this._ProductService.GetOrdersProducts().subscribe({

      next: (response) => {
        this.Orders = response.orders.reverse();
        response ? this._spinner.hide() : this._spinner.show()
      }, 
      error: (err) => {
        console.log(err);
      }


    })



  }
  



}
