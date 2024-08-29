import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarGeneralComponent } from '../../Component/FixedComponants/navbar-general/navbar-general.component';
import { FooterComponent } from '../../Component/FixedComponants/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule , NavbarGeneralComponent , FooterComponent , RouterModule],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
