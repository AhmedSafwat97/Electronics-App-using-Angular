import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-general',
  standalone: true,
  imports: [CommonModule , RouterModule , RouterLinkActive],
  templateUrl: './navbar-general.component.html',
  styleUrl: './navbar-general.component.scss'
})
export class NavbarGeneralComponent {

}
