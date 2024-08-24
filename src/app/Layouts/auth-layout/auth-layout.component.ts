import { Component } from '@angular/core';
import { FooterComponent } from "../../Component/FixedComponants/footer/footer.component";
import { CommonModule } from '@angular/common';
import { NavbarAuthComponent } from '../../Component/FixedComponants/navbar-auth/navbar-auth.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, NavbarAuthComponent, FooterComponent , RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
