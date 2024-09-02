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
    this._spinner.show();

    this._ProductService.GetOrdersProducts().subscribe({
      next: (response) => {
        this.Orders = response.orders.reverse();
    
        if (!response || !response.orders || response.orders.length === 0) {
          this._spinner.hide(); // Hide spinner if the response is empty
        } else {
          this._spinner.hide();
        }
      },
      error: (err) => {
        console.log(err);
        this._spinner.hide(); 
      }
    });



  }
  



}
