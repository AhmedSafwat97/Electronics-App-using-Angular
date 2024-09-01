import { Spinner } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../../Services/userinfo.service';
import { SpinnerService } from '../../Services/spinner.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  userData : any = {}

  constructor(private _userInfoServices : UserinfoService , private _Spinner : SpinnerService) {
  }

  ngOnInit(): void {
    this._Spinner.show()

        this._userInfoServices.GetUserData().subscribe({
          next: (response) => {
            console.log(response)
            response ? this._Spinner.hide() : this._Spinner.show()
          },
          error: (err) => {
            console.log(err)
          }
          
        })
  }

}
