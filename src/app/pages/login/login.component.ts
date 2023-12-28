import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AppComponent } from '../../app.component';
import { LoginInterceptor } from '../../interceptors/login.interceptor';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // user = {email: '', password: ''}
    email:string = ''
    password: string =''

  constructor(private httpClient: HttpClient, private appComponent: AppComponent) {}

  
    login(){
        const user = {
            email: this.email,
            password: this.password
        }
        //console.log(user)
        return this.httpClient.post(`${environment}auth/login`, user).subscribe(
          (token) => {
            // console.log(token)
            localStorage.setItem('token_user', JSON.stringify(token))
            this.appComponent.autenticado = true;
            // console.log(localStorage.getItem("token_user"))
          }
        )
    }
}
