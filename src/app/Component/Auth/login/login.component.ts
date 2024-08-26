import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , RouterModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _FormBuilder: FormBuilder , private _AuthService: AuthService , private Router:Router) {
  }

  IsLoading:boolean = false;
  ErrorMessage:string = '';


  login : FormGroup = this._FormBuilder.group({
    Email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required]]
  })

  OnSubmit(){
    this._AuthService.SetLogin(this.login.value).subscribe({
      next : (response) => {
        console.log(response);

        if (response.message === 'user logged in successfully') {
          this.IsLoading = true;
          this.Router.navigate(['/home'])
        }

      },
      error : (err) => {
        console.log(err);
        this.ErrorMessage = err.error.message;
        
      } 
    })
  } 

}
