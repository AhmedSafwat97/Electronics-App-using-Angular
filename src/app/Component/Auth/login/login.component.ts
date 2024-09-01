import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { SpinnerService } from '../../../Services/spinner.service';
import { ScrollService } from '../../../Services/scroll.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , RouterModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private _FormBuilder: FormBuilder ,
    private _ScrollService : ScrollService , 
    private _spinner: SpinnerService , private _AuthService: AuthService , private Router:Router) {
  }

  IsLoading:boolean = false;
  ErrorMessage:string = '';
  

  login : FormGroup = this._FormBuilder.group({
    Email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required]]
  })

  OnSubmit(){
    this._spinner.show();
    this._AuthService.SetLogin(this.login.value).subscribe({
      next : (response) => { 
        console.log(response);

        if (response.message === 'user logged in successfully') {
          localStorage.setItem('token' , response.token)
          this.IsLoading = true;
          this.Router.navigate(['/home'])
          response ? this._spinner.hide() : this._spinner.show()
        }

      },
      error : (err) => {
        console.log(err);
        this.ErrorMessage = err.error.message;
        this._spinner.hide();
        
      } 
    })
  } 

ngOnInit(): void {
  setTimeout(() => this._ScrollService.scrollToElement('scrollTarget'), 0);   

}



}
