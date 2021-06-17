import { Cliente } from './../../models/cliente.model';
import { ClientesApi } from './../../container/clientes-api';
import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-clientes',
  templateUrl: './main-clientes.component.html',
  styleUrls: ['./main-clientes.component.css']
})
export class MainClientesComponent implements OnInit {

  constructor(private apiService : ApiService, private router: Router) { }

  clientes : Cliente []= [];


  ngOnInit(): void {
    this.apiService.clienteService.getClientes()
      .subscribe(data => {
        this.clientes = [];
        console.log(data)
        if (data) {
          this.clientes = data.clientes;
          
        }
      }, error => {
        this.apiService.notifService.error('Error', 'Error al cargar lista de clientes');
        console.error(error);
      });
      
  }

  editarCliente(proveedor : Cliente){
    console.log(proveedor);
    localStorage.setItem("editClienteId", proveedor.id+"");
    this.router.navigate(['/main/cliente-editar']);
  }

}
