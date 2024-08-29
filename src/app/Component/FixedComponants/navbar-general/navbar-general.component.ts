import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, RouterLinkActive, Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-navbar-general',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.scss'] // Corrected to styleUrls and made it an array
})
export class NavbarGeneralComponent implements OnInit { // Corrected syntax


  constructor(private router:Router , private _ProductService: ProductService) { }
  loginUser: boolean = false;
  OpenDropDown: boolean = false;
  CartCount: number = 0;

  IsOpen() { 
      this.loginUser = false ? this.OpenDropDown = true : this.OpenDropDown = false;
  }


  isLogin() { // Corrected method placement and added 'this'
    if (localStorage.getItem('token')) {
      this.loginUser = true;
    } else {
      this.loginUser = false;
    }
    return this.loginUser;
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLogin();
  }

  ngOnInit(): void { // Corrected method placement
    this.isLogin(); // Added 'this' to refer to the method in the class
    
    console.log('Hello')

    this._ProductService.CartItems.subscribe({
      next: (response) => {
        this.CartCount = response
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      }
    });

    this._ProductService.GetCartProducts().subscribe({
      next: (response) => {
        this.CartCount = response.data.items.length;
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      }
    });


  }

}