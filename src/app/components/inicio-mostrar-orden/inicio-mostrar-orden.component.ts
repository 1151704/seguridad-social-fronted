import { ApiService } from 'src/app/core/api.service';
import { Empresa } from './../../models/empresa.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-inicio-mostrar-orden',
  templateUrl: './inicio-mostrar-orden.component.html',
  styleUrls: ['./inicio-mostrar-orden.component.css']
})
export class InicioMostrarOrdenComponent implements OnInit {
  cliente = null
  orden = null
  signature = null
  referenceCode = null

  empresa: Empresa = new Empresa();

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {

    this.cliente = JSON.parse(window.sessionStorage.getItem('cliente'));
    this.orden = JSON.parse(window.sessionStorage.getItem('orden'));

    if (!this.orden) {
      Swal.fire(
        'El cliente no existe',
        'No tiene permisos para estar aquí',
        'error'
      )
      this.router.navigate(['/inicio/consultar-orden']);
    }

    this.apiService.empresaService.getEmpresaActual().subscribe(data => {
      this.empresa = data;
      this.referenceCode = `${this.orden.id}`
      let hash = `${data.api}~${data.merchantId}~${this.referenceCode}~${this.cliente.plan.precio}~${data.currency}`;
      this.signature = Md5.hashStr(hash);

    })
  }


  pagarFactura() {
    
  }

  limpiar() {
    window.sessionStorage.removeItem('cliente')
    window.sessionStorage.removeItem('orden')
    this.router.navigate(['/inicio/consultar-orden']);
  }

}
