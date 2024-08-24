import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-auth',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive ],
  templateUrl: './navbar-auth.component.html',
  styleUrl: './navbar-auth.component.scss'
})
export class NavbarAuthComponent {

}
