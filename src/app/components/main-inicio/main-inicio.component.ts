import { NAME_APP } from './../../url.constants';
import { Title } from '@angular/platform-browser';
import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Empresa } from './../../models/empresa.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main-inicio',
  templateUrl: './main-inicio.component.html',
  styleUrls: ['./main-inicio.component.css']
})
export class MainInicioComponent implements OnInit {

  now = moment();

  info: any = {};

  mesActual = this.now.get('M');
  anioActual = this.now.get('y');

  epss: Empresa[] = [];

  epsSelect: Empresa = null;

  // mensualidadProveedor: MensualidadProvedor = null;

  constructor(private token: TokenStorageService, private apiService: ApiService, private titleService: Title
    ) {}

    ngOnInit() {
      this.titleService.setTitle(`${NAME_APP} - Inicio`);
    this.token.validate();
    this.info = this.token.getInfo();

    // if (this.token.isRol('ROLE_ADMIN')) {
    //   this.apiService.epsService.getListaEps()
    //     .subscribe(data => {
    //       if (data.epss) {
    //         this.epss = data.epss;
    //         if (this.epss.length > 0) {
    //           this.epsSelect = this.epss[0];
    //           // this.getMensualidadSede(this.mesActual, this.anioActual, this.proveedorSelect.nit);
    //         }
    //       }
    //     })
    // } else {
    //   this.epsSelect = this.token.getUser().eps;
    //   // this.getMensualidadSede(this.mesActual, this.anioActual, this.proveedorSelect.nit);
    // }

  }

  onChangeProveedor(eps: Empresa) {
    this.epsSelect = eps;
    // this.getMensualidadSede(this.mesActual, this.anioActual, eps.identificacion);
  }

  getMensualidadSede(mes: number, anio: number, nit: string) {
    // this.mensualidadProveedor = null;
    // this.apiService.mensualidadProveedorService.getMensualidadPorProveedor(nit, mes, anio)
    //   .subscribe(data => {
    //     if (data.mensualidad) {
    //       this.mensualidadProveedor = data.mensualidad;
    //     }
    //   });
  }

  isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
