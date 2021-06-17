import { OrdenesApi } from './../../container/ordenes-api';
import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-main-ordenes',
  templateUrl: './main-ordenes.component.html',
  styleUrls: ['./main-ordenes.component.css']
})
export class MainOrdenesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ordenes : Orden [] = [];

  ngOnInit(): void {

    this.apiService.ordenesService.getOrdenes().subscribe(params => {

      if(params){
        this.ordenes=[];
        this.ordenes= params.ordenes;
      }
      else {
        this.apiService.notifService.error('Error', 'Error al cargar lista de ordenes');
        console.error("hubo un error");
      }
    })
  }

}
