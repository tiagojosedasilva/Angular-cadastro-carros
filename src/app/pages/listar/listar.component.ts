import { Component, OnInit } from '@angular/core';
import { ICarros } from '../../interfaces/icarros.interface';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PagesModule } from '../pages.module';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PagesModule, RouterModule, FormsModule, HttpClientModule],
  providers: [ AppService],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  carroArray: any;

  constructor( private appService: AppService){}

  ngOnInit(){
    this.obterTodos()
  }

  obterTodos(){
    this.carroArray = this.appService.obterTodos().then((carro: ICarros[] | undefined) => {
      return this.carroArray = carro;
    })
    
  }

  // obterTodosUsuarios(){
  //   return this.userService.obterTodos().then(( user: IUser[] | undefined) => {
  //     return this.usuario = user;
  //   })
  // }
}
