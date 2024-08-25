import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-general',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.scss'] // Corrected to styleUrls and made it an array
})
export class NavbarGeneralComponent implements OnInit { // Corrected syntax

  loginUser: boolean = false;

  isLogin() { // Corrected method placement and added 'this'
    if (localStorage.getItem('token')) {
      this.loginUser = true;
    } else {
      this.loginUser = false;
    }
    return this.loginUser;
  }

  ngOnInit(): void { // Corrected method placement
    this.isLogin(); // Added 'this' to refer to the method in the class
  }

}