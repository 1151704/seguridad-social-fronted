import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-mostrar-orden',
  templateUrl: './inicio-mostrar-orden.component.html',
  styleUrls: ['./inicio-mostrar-orden.component.css']
})
export class InicioMostrarOrdenComponent implements OnInit {
  cliente : any = null
  orden : any = null

  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(window.sessionStorage.getItem('cliente'))
    this.orden = JSON.parse(window.sessionStorage.getItem('orden'))
    if (!this.orden) {
      Swal.fire(
        'El cliente no existe',
        'No tiene permisos para estar aquí',
        'error'
      )
      this.router.navigate(['/inicio/consultar-orden']);
    }
  }

  limpiar() {
    window.sessionStorage.removeItem('cliente')
    window.sessionStorage.removeItem('orden')
    this.router.navigate(['/inicio/consultar-orden']);
  }

}
