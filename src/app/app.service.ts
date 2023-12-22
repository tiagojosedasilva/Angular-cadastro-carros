import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarros } from './interfaces/icarros.interface';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

  obterTodos(){
    this.httpClient.get<ICarros[]>(`${environment}cars`).toPromise()
  }
}
