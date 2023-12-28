import { Component, OnInit } from '@angular/core';
import { ICarros } from '../../interfaces/icarros.interface';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from '../pages.module';

@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PagesModule, RouterModule, FormsModule, HttpClientModule, NgFor],
  providers: [ AppService],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent implements OnInit{

  carro: ICarros = {
    marca: '',
    modelo: '',
    ano: ''
  }
  id: any;

  constructor(private appService: AppService, private activatedRoute : ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
  }

  editarCarro(id: string, carro: ICarros){
    id = this.id
    this.appService.editarCarro(id, carro)
  }
}
