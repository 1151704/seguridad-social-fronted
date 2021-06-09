import { SolicitudesAfiliacionService } from './../../services/solicitudes-afiliacion.service';
import { SolicitudesApi } from './../../container/solicitudes-api';
import { Solicitud } from 'src/app/models/solicitud-afiliacion';
import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { SolicitudSalidaApi } from './../../container/solicitudes-salida-api';
import { API_REST } from './../../url.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-solicitudes',
  templateUrl: './main-solicitudes.component.html',
  styleUrls: ['./main-solicitudes.component.css']
})
export class MainSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  info: Solicitud;

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.apiService.solicitudService.getSolicitudes()
      .subscribe(data => {
        console.log(data)
        this.solicitudes = data.solicitudes;
      });
  }
}