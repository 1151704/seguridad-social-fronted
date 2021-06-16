import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-inicio-mostrar-orden',
  templateUrl: './inicio-mostrar-orden.component.html',
  styleUrls: ['./inicio-mostrar-orden.component.css']
})
export class InicioMostrarOrdenComponent implements OnInit {
  cliente : any = null
  orden : any = null
  signature: any = null
  url ="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";


  constructor(private router: Router ) { }

  ngOnInit(): void {
 //   const md5 = new Md5();
   // this.signature = md5.appendStr('hello').end();
    
    this.cliente = JSON.parse(window.sessionStorage.getItem('cliente'));
    this.orden = JSON.parse(window.sessionStorage.getItem('orden'));
    console.log(this.orden.id);
    console.log(this.cliente.plan.precio);
    this.signature =Md5.hashStr('4Vj8eK4rloUd272L48hsrarnUA~'.concat('508029~').concat(this.orden.id).concat('~').concat(this.cliente.plan.precio).concat('~').concat('COP'));
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
