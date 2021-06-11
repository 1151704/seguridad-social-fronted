import { SolicitudesBusquedaSalidaApi } from './../../container/solicitudes-busqueda-salida-api';
import { Solicitud } from 'src/app/models/solicitud-afiliacion';
import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { API_REST } from 'src/app/url.constants';
import * as moment from 'moment';

@Component({
  selector: 'app-main-solicitudes',
  templateUrl: './main-solicitudes.component.html',
  styleUrls: ['./main-solicitudes.component.css']
})
export class MainSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  info: Solicitud;
  urlBase: string = API_REST;

  cargando: boolean = true;

  porFechaFiltro: boolean = true;
  estadoFiltro: string = '';
  busquedaFiltro: string = '';
  fechaFiltro: string = moment().format('YYYY-MM-DD');

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.busqueda()
  }
  
  busqueda() {
    this.solicitudes = [];
    this.cargando = true;

    let salida = new SolicitudesBusquedaSalidaApi();
    
    salida.busqueda= this.busquedaFiltro;
    salida.estado = this.estadoFiltro;
    salida.fecha = this.fechaFiltro;
    salida.porFecha = this.porFechaFiltro;

    this.apiService.solicitudService.getSolicitudesBusqueda(salida).subscribe(
      data => {
        this.solicitudes = data.solicitudes
        this.cargando = false
      }
    )

  }

  editPlan(proveedor: Solicitud): void {
    localStorage.setItem("editSolicitudId", proveedor.id.toString());
    this.router.navigate(['/main/solicitudes-editar']);
  };
}
