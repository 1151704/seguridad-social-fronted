import { Solicitud } from 'src/app/models/solicitud-afiliacion';
import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { API_REST } from 'src/app/url.constants';

@Component({
  selector: 'app-main-solicitudes',
  templateUrl: './main-solicitudes.component.html',
  styleUrls: ['./main-solicitudes.component.css']
})
export class MainSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  info: Solicitud;
  urlBase: string = API_REST;

  cargando: boolean = false;
  porFechaFiltro: boolean = false;
  estadoFiltro: string = '';
  busquedaFiltro: string = '';
  fechaFiltro: string = '';

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.apiService.solicitudService.getSolicitudes()
      .subscribe(data => {
        console.log(data)
        this.solicitudes = data.solicitudes;
      });
  }
  
  busqueda() {
    this.solicitudes = [];
    this.cargando = true;
  }

  editPlan(proveedor: Solicitud): void {
    localStorage.setItem("editSolicitudId", proveedor.id.toString());
    this.router.navigate(['/main/solicitudes-editar']);
  };
}
