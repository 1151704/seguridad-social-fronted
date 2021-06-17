import { ApiService } from './../../core/api.service';
import { OrdenesService } from './../../services/ordenes.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-generar-ordenes',
  templateUrl: './main-generar-ordenes.component.html',
  styleUrls: ['./main-generar-ordenes.component.css']
})
export class MainGenerarOrdenesComponent implements OnInit {

  constructor( private apiService : ApiService) { }
   
   private rt : Boolean;
  ngOnInit(): void {
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
