import { Plan } from 'src/app/models/plan.model';
import { PlanesApi } from './../../container/planes-api';
import { ApiService } from 'src/app/core/api.service';
import { TipoCliente } from 'src/app/models/tipo-cliente.model';
import { TiposClientesApi } from './../../container/tipos-clientes-api';
import { TIPOS_DOCUMENTOS } from 'src/app/data/datos.constants';
import { ROLES } from './../../data/datos.constants';
import { Cliente } from './../../models/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Municipio } from 'src/app/models/municipio.model';

@Component({
  selector: 'app-main-cliente-registrar',
  templateUrl: './main-cliente-registrar.component.html',
  styleUrls: ['./main-cliente-registrar.component.css']
})
export class MainClienteRegistrarComponent implements OnInit {

   cliente: Cliente = new Cliente();
   tipos = TIPOS_DOCUMENTOS;
   tiposCliente : TipoCliente [] = [];
   departamentos: Departamento[] = []
  departamento: Departamento = null
  municipios: Municipio[] = []
  municipio: Municipio = null
  planes : Plan [] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.tipoClienteService.getTiposClientes()
      .subscribe(data => {
        this.tiposCliente = [];
        
        if (data.tiposCliente) {
          this.tiposCliente = data.tiposCliente;
          //alert("se ejecuto esa monda")
        }
      }, error => {
        this.apiService.notifService.error('Error', 'Error al cargar lista de tipos de cliente');
        console.error(error);
      });

      this.apiService.departamentoService.getDepartamentos().subscribe(
        data => {
          this.departamentos = data
          this.departamento = data[0]
          this.getMunicipios(data[0])
        }
      )

      this.apiService.planService.getPlanes()
      .subscribe(data => {
        this.planes = [];
        
        if (data.planes) {
          this.planes = data.planes;
          //alert("se ejecuto esa monda")
        }
      }, error => {
        this.apiService.notifService.error('Error', 'Error al cargar lista de planes');
        console.error(error);
      });

  }


  getMunicipios(dato: Departamento) {
    this.apiService.municipioService.getMunicipios(dato.idDepartamento).subscribe(
      data => {
        this.municipios = data
        this.municipio = data[0]
      }
    )
  }
  onSubmit(){

    /*console.log(this.cliente.apellido1);
    console.log(this.cliente.correo);
    console.log(this.cliente.idMunicipio);
    console.log(this.cliente.idTipoCliente);*/

   this.apiService.clienteService.guardarCliente(this.cliente)
    .subscribe(data => {
      this.cliente = new Cliente;
      
      if (data.nombre1) {
        this.apiService.notifService.success('Cliente registrado', '!Bien hecho!');
        //alert("se ejecuto esa monda")
      }
    }, error => {
      this.apiService.notifService.error('Error', 'Error al registrar cliente');
      console.error(error);
    });



  }
}
