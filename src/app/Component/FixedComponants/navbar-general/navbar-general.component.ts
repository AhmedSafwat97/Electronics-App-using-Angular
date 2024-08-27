import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-general',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.scss'] // Corrected to styleUrls and made it an array
})
export class NavbarGeneralComponent implements OnInit { // Corrected syntax


  constructor(private router:Router) { }


  loginUser: boolean = false;
  OpenDropDown: boolean = false;


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
  }

}