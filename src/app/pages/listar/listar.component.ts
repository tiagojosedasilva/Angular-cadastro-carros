import { Component, OnInit } from '@angular/core';
import { ICarros } from '../../interfaces/icarros.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [ HttpClientModule ],
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
