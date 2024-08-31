import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { PaymentService } from '../../Services/Paymentservice';
import { SpinnerService } from '../../Services/spinner.service';

@Component({
  selector: 'app-payment-data',
  standalone: true,
  imports: [ CommonModule , RouterLink , ReactiveFormsModule],
  templateUrl: './payment-data.component.html',
  styleUrl: './payment-data.component.scss'
})
export class PaymentDataComponent {

  constructor ( private _spinner: SpinnerService ,private _FormBuilder:FormBuilder , private _ProductService:ProductService , private _PaymentServices:PaymentService){}

  CartProducts:any[] = []
  TotalPrice: number = 0
  Quantity:number = 1
  cartId: string = ''
  IsLoading:boolean = false

  BillingDetails : FormGroup = this._FormBuilder.group({
    city : ['' , [Validators.required ]],
    street : ['' , [Validators.required]],
    building : ['' , [Validators.required]],
    floor : ['' , []] ,
    Phone: ['', [Validators.required, Validators.pattern(/^01[0125]\d{8}$/)]]
  })


onSubmit(){


  this.IsLoading = true

  this._PaymentServices.MakePayment(this.cartId , this.BillingDetails.value).subscribe({
    next: (response) => {
      console.log(response);
      if (response.status === 'Success') { 
        window.open(response.paymentLink , '_self')
        this.IsLoading = false
      }
    },
    error: (err) => {
      this.IsLoading = true
    }
  })


}

ngOnInit(): void {
  this._spinner.show()

  this._ProductService.GetCartProducts().subscribe({
    next: (response) => {
      this.CartProducts = response.data.items
      this.TotalPrice = response.totalPrice
      this.cartId = response.data._id
      response ? this._spinner.hide() : this._spinner.show()

    },
    error: (err) => {
      console.log(err);
    }
  })

}




}
