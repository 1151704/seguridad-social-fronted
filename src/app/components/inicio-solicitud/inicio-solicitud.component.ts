import { ApiService } from './../../core/api.service';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente.model';
import { FormGroup } from '@angular/forms';
import { Solicitud } from './../../models/solicitud-afiliacion';
import { Component, OnInit } from '@angular/core';
import { API_REST } from 'src/app/url.constants';

@Component({
  selector: 'app-inicio-solicitud',
  templateUrl: './inicio-solicitud.component.html',
  styleUrls: ['./inicio-solicitud.component.css']
})
export class InicioSolicitudComponent implements OnInit {
  clientes: Cliente[] = []

  urlBase: string = API_REST;

  public cliente: Cliente= new Cliente();
  public soli: Solicitud = new Solicitud();
  constructor(private apiService: ApiService,private serviceCliente: ClienteService) { }

  ngOnInit(): void {
    this.apiService.clienteService.getClientes().subscribe(
      data => {
        if (data.clientes) {
          this.clientes = data.clientes
        }
      }
    )
  }

  onSubmit() {
  this.serviceCliente.guardarCliente(this.cliente).subscribe(
    response => alert("se guardo con exito")
  )

  }



}
