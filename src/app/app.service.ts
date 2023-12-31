import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarros } from './interfaces/icarros.interface';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
    //console.log(httpClient)
  }

  obterTodos(){
    return this.httpClient.get<ICarros[]>(`${environment}cars`).toPromise()
  }

  cadastrarCarro(carro: ICarros){
    return this.httpClient.post<ICarros>(`${environment}cars`, carro).toPromise()
  }

  excluirCarro(id: string){
    return this.httpClient.delete<ICarros>(`${environment}cars/${id}`).toPromise()
  }

  editarCarro(id: string, carro: ICarros){
    return this.httpClient.patch<ICarros>(`${environment}cars/${id}`, carro).toPromise()
  }
}
