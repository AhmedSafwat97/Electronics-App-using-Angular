import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, RouterLinkActive, Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { SpinnerService } from '../../../Services/spinner.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar-general',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive , FormsModule],
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.scss'] // Corrected to styleUrls and made it an array
})
export class NavbarGeneralComponent implements OnInit { // Corrected syntax


  constructor(private router:Router , private _ProductService: ProductService ,  private _spinner: SpinnerService) { }
  loginUser: boolean = false;
  OpenDropDown: boolean = false;
  CartCount: number = 0;
  searchInput: string = '';

  IsOpen() { 
      this.loginUser = false ? this.OpenDropDown = true : this.OpenDropDown = false;
  }


  OnSearch() {
    this.router.navigate(['/Search', this.searchInput]);
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
    this._spinner.show();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    localStorage.getItem('token') == null? this._spinner.hide() : this._spinner.show();
    this.isLogin();
  }

  ngOnInit(): void { // Corrected method placement
    this.isLogin(); // Added 'this' to refer to the method in the class
    
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