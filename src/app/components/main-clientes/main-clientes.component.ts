import { Cliente } from './../../models/cliente.model';
import { ClientesApi } from './../../container/clientes-api';
import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-clientes',
  templateUrl: './main-clientes.component.html',
  styleUrls: ['./main-clientes.component.css']
})
export class MainClientesComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  clientes : Cliente []= [];


  ngOnInit(): void {
    this.apiService.clienteService.getClientes()
      .subscribe(data => {
        this.clientes = [];
        console.log(data)
        if (data.clientes) {
          this.clientes = data.clientes;
          //alert("se ejecuto esa monda")
        }
      }, error => {
        this.apiService.notifService.error('Error', 'Error al cargar lista de clientes');
        console.error(error);
      });
      
  }

}
