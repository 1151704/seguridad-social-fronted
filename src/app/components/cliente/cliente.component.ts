import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Clientess } from 'src/app/models/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente : Clientess = new Clientess();
  titulo : string = "Seguridad social para todos"
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  create(): void {

    this.apiService.clienteServices.guardar(this.cliente).subscribe (

      response => Swal.fire('Cliente guardado con exito', `Cliente ${this.cliente.nombre} creado con exito`, 'success')
    )

    console.log(this.cliente)
  }

}
