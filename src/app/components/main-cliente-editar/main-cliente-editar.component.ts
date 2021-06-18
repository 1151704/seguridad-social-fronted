import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Cliente } from './../../models/cliente.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plan } from 'src/app/models/plan.model';
import { PlanesApi } from './../../container/planes-api';
import { TipoCliente } from 'src/app/models/tipo-cliente.model';
import { TiposClientesApi } from './../../container/tipos-clientes-api';
import { TIPOS_DOCUMENTOS } from 'src/app/data/datos.constants';
import { ROLES } from './../../data/datos.constants';
import { Departamento } from 'src/app/models/departamento.model';
import { Municipio } from 'src/app/models/municipio.model';
@Component({
  selector: 'app-main-cliente-editar',
  templateUrl: './main-cliente-editar.component.html',
  styleUrls: ['./main-cliente-editar.component.css']
})
export class MainClienteEditarComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) { }

  proveedorForm: FormGroup;
  proveedor: Cliente;
  proveedorEdit: Cliente;
  cliente: Cliente = new Cliente();
  tipos = TIPOS_DOCUMENTOS;
  tiposCliente: TipoCliente[] = [];
  departamentos: Departamento[] = []
  departamento: Departamento = null
  municipios: Municipio[] = []
  municipio: Municipio = null
  planes: Plan[] = [];
  ngOnInit(): void {
    let proveedorId = window.localStorage.getItem("editClienteId");
    alert(proveedorId);
    if (!proveedorId) {
      this.router.navigate(['/main/clientes']);
      return;
    }

    this.proveedor = new Cliente();

    this.proveedorForm = this.fb.group({
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      correo: ['', Validators.required],
      identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      idMunicipio: ['', Validators.required],
      idTipoIdentificacion: ['', Validators.required],
      idPlan: ['', Validators.required],
      idTipoCliente: ['', Validators.required],

      enable: [false],
    });



    this.apiService.clienteService.getClienteId(proveedorId)
      .subscribe(data => {

        if (data) {
          this.proveedorForm.patchValue(data);
          this.proveedor = data;

        } else {
          this.router.navigate(['/main/clientes']);
        }
      });

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

  onSubmit() {
    alert('Faltante')
    // this.proveedorEdit = Object.assign({}, this.proveedorForm.value);

    // let itemProveedor = new Cliente();
    // itemProveedor.id= +window.localStorage.getItem("editClienteId");

    // itemProveedor.apellido1 = this.proveedor.apellido1;
    // itemProveedor.apellido2= this.proveedor.apellido2;
    // itemProveedor.nombre1= this.proveedor.nombre1;
    // itemProveedor.nombre2= this.proveedor.nombre2;
    // itemProveedor.direccion=this.proveedor.direccion;
    // itemProveedor.correo= this.proveedor.correo;
    // itemProveedor.idTipoCliente=this.cliente.idTipoCliente;
    // itemProveedor.idTipoIdentificacion= this.cliente.idTipoIdentificacion;
    // itemProveedor.idTipoPlan = this.cliente.idTipoPlan;
    // itemProveedor.identificacion = this.proveedor.identificacion;
    // itemProveedor.telefono = this.proveedor.telefono;
    // itemProveedor.idMunicipio= this.cliente.idMunicipio;
    // console.log(itemProveedor);
    // console.log(itemProveedor.apellido1);
    // console.log(this.cliente, "hello");
    // this.apiService.clienteService.guardarCliente(this.cliente).subscribe(params =>{
    //   if(params){
    //     console.log(params);

    //   }
    //   else{
    //     alert("Error");
    //   }
    // });


  }

}
