import { Component, Input } from '@angular/core';
import { Product } from '../../../Sheared/Interfaces/product';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() Product!: Product; 

}
