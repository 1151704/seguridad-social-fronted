import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
import { ApiService } from 'src/app/core/api.service';
import { Empresa } from 'src/app/models/empresa.model';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { NAME_APP } from 'src/app/url.constants';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

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