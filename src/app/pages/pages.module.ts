import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent, 
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  exports: [ 
    HomeComponent, 
    LoginComponent, 
    RegisterComponent,
    PagesComponent
  ]
})
export class PagesModule { }
