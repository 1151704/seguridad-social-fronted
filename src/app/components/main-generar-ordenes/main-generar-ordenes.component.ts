import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { Orden } from 'src/app/models/orden.model';

@Component({
  selector: 'app-main-generar-ordenes',
  templateUrl: './main-generar-ordenes.component.html',
  styleUrls: ['./main-generar-ordenes.component.css']
})
export class MainGenerarOrdenesComponent implements OnInit {

  constructor( private apiService : ApiService) { }
  ordenes : Orden []= [];
   private rt : Boolean;
  ngOnInit(): void {
    this.apiService.ordenesService.getOrdenes()
    .subscribe(data => {
      this.ordenes = [];
      console.log(data)
      if (data) {
        this.ordenes = data.ordenes;
      }
    }, error => {
      this.apiService.notifService.error('Error', 'Error al cargar lista de ordenes');
      console.error(error);
    });
  }

  generar(){
    Swal.fire(
        'Generadas',
        'Ordenes de servicio generadas a los clientes',
        'success'
      )
    this.apiService.ordenesService.generarOrdenes().subscribe(
      data=> {console.log(data)}
    );

  }
}
