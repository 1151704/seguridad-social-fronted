import { Component, OnInit } from '@angular/core';
import { Clientess } from 'src/app/models/cliente';
import { ApiService } from 'src/app/core/api.service';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  titulo : string = "Seguridad social para todos"
  cliente : Clientess = new Clientess();
  constructor( private apiService: ApiService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }
  cargarCliente() : void {
    this.activatedRouter.params.subscribe(
      params => {
        let id = params["id"]

        if(id){
          this.apiService.clienteServices.getClienteId(id).subscribe(cliente => this.cliente=cliente);
        }
      }
    )
  }

  update(): void {

    this.apiService.clienteServices.guardar(this.cliente).subscribe (

      response =>{ Swal.fire('Cliente Actualizado con exito', `Cliente ${this.cliente.nombre} actualizado con exito`, 'success')
      this.router.navigate(['mostrar-clientes'])}
    )
  }
}
