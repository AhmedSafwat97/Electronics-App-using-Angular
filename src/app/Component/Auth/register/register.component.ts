import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule , HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']  // Fixed typo here
})
export class RegisterComponent {

  constructor(private _FormBuilder: FormBuilder , private _AuthService: AuthService , private Router:Router) {
  }


  IsLoading:boolean = false;
  ErrorMessage:string = '';

  
  register : FormGroup = this._FormBuilder.group({
    FName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    LName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    Email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
    RePassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
    Phone: ['', [Validators.required, Validators.pattern(/^01[0125]\d{8}$/)]]
  }, { validators: this.passwordMatchValidator });



  onSubmit() {
    this._AuthService.SetRegister(this.register.value).subscribe({
      next: (response) => {
        if (response.message === 'user created successfully') {
          this.IsLoading = true;
          this.Router.navigate(['/login']);
        }

      },
      error: (err) => { 
        this.ErrorMessage = err.error.message;
      }
    });
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('RePassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}