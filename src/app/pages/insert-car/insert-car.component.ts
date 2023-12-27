import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ICarros } from '../../interfaces/icarros.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-car',
  standalone: true,
  imports: [ FormsModule],
  providers: [ AppService ],
  templateUrl: './insert-car.component.html',
  styleUrl: './insert-car.component.css'
})
export class InsertCarComponent {
  carro: ICarros = {
    marca: '',
    modelo: '',
    ano: ''
  }

  constructor(private appService: AppService){}

  cadastrarCarro(carro: ICarros){
    return this.appService.cadastrarCarro(carro)
  }

}
