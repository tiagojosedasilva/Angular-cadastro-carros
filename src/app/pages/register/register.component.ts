import { Component } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor( private httpClient: HttpClient){}
  email = ''
  firstname = ''
  lastname = ''
  password = ''


  register(){
    const user = {
      email: this.email,
      firstName: this.firstname,
      lastName: this.lastname,
      password: this.password
    }
    console.log(user)
    return this.httpClient.post<IUser>(`${environment}users`, user).subscribe(
      (qualquer) => {
        console.log(qualquer)
      }
    )
  }

}
