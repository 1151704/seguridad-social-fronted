import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente.model';
import { FormGroup } from '@angular/forms';
import { solicitud } from './../../models/solicitud-afiliacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-solicitud',
  templateUrl: './inicio-solicitud.component.html',
  styleUrls: ['./inicio-solicitud.component.css']
})
export class InicioSolicitudComponent implements OnInit {

  public cliente: Cliente= new Cliente();
  public soli: solicitud = new solicitud();
  constructor(private serviceCliente: ClienteService) { }

  ngOnInit(): void {
  }


  onSubmit() {
  this.serviceCliente.guardarCliente(this.cliente).subscribe(
    response => alert("se guardo con exito")
  )

  }

}
