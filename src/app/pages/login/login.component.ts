import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../../interfaces/iuser.interface';
import { getLocaleCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {email: '', password: '' }

  constructor(private httpClient: HttpClient) {}

  
    login(user: IUser){
        // const user = {
        //     email: email,
        //     password: password
        // }
        console.log(JSON.stringify(user))
        return console.log(this.httpClient.post<IUser>(`http://localhost:3000/auth/login`, JSON.stringify(user)))
    }

  // constructor(private loginService: LoginService){}

  // login(user: { email: string; password: string; }){
  //   return this.loginService.login(user.email, user.password)
  //   // console.log(user.email, user.password)
  // }
}
