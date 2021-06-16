import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'src/md5';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-inicio-mostrar-orden',
  templateUrl: './inicio-mostrar-orden.component.html',
  styleUrls: ['./inicio-mostrar-orden.component.css']
})
export class InicioMostrarOrdenComponent implements OnInit {
  cliente : any = null
  orden : any = null
<<<<<<< HEAD
  signature: null
  md5 = new Md5();
=======
  url ="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";


>>>>>>> b4c6cbae6d8b573bd27a8d0da34b23bfd9dd0e34
  constructor(private router: Router ) { }

  ngOnInit(): void {
 //   const md5 = new Md5();
   // this.signature = md5.appendStr('hello').end();
    
    this.cliente = JSON.parse(window.sessionStorage.getItem('cliente'));
    this.orden = JSON.parse(window.sessionStorage.getItem('orden'));
    this.md5.appendStr('4Vj8eK4rloUd272L48hsrarnUA').appendStr('508029').appendStr(this.orden.id).appendStr(this.cliente.plan.precio+0.19*this.cliente.plan.precio).appendStr('COP').end();
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
