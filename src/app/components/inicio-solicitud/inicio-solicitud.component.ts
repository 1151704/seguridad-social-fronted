import { TIPOS_DOCUMENTOS } from './../../data/datos.constants';
import { SolicitudSalidaApi } from './../../container/solicitudes-salida-api';
import { ApiService } from './../../core/api.service';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan.model';
import { TipoCliente } from 'src/app/models/tipo-cliente.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Municipio } from 'src/app/models/municipio.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Empresa } from './../../models/empresa.model';
import { API_REST } from 'src/app/url.constants';

@Component({
  selector: 'app-inicio-solicitud',
  templateUrl: './inicio-solicitud.component.html',
  styleUrls: ['./inicio-solicitud.component.css']
})
export class InicioSolicitudComponent implements OnInit {
  empresa: Empresa = null
  solicitud: SolicitudSalidaApi;
  solicitudForm: FormGroup;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  nameFile: string = null;
  urlBase: string = API_REST;
  tipos = TIPOS_DOCUMENTOS;
  tiposPlan: Plan[] = []
  tiposCliente: TipoCliente[] = []
  departamentos: Departamento[] = []
  departamento: Departamento = null
  municipios: Municipio[] = []
  municipio: Municipio = null

  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.empresaService.getEmpresaActual().subscribe(
      data => {
        this.empresa = data
      }
    )
    this.solicitudForm = this.fb.group({
      nombre1: ['', Validators.required],
      nombre2: ['', ],
      apellido1: ['', Validators.required],
      apellido2: [''],
      telefono: ['', Validators.required],
      direccion: [''],
      correo: ['', Validators.required],
      identificacion: ['', Validators.required],
      idTipoIdentificacion: [this.tipos[0].value, Validators.required],
      idTipoCliente: [''],
      idMunicipio: [''],
      idTipoPlan: [''],
      profesion: [''],
      observaciones: ['']
    });

    this.apiService.planService.getPlanesActivos().subscribe(
      data => {
        this.tiposPlan = data.planes
      }
    )
    this.apiService.tipoClienteService.getTiposClientes().subscribe(
      data => {
        this.tiposCliente = data.tiposCliente
      }
    )
    this.apiService.departamentoService.getDepartamentos().subscribe(
      data => {
        this.departamentos = data
        this.departamento = data[0]
        this.getMunicipios(data[0])
      }
    )
  }

  getMunicipios(dato: Departamento) {
    this.apiService.municipioService.getMunicipios(dato.idDepartamento).subscribe(
      data => {
        this.municipios = data
        this.municipio = data[0]
      }
    )
  }

  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;
    this.nameFile = this.selectedFiles.item(0).name;
    this.currentFileUpload = null;
    this.progress.percentage = 0;
  }

  onSubmit() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles && this.selectedFiles.length != 0 ? this.selectedFiles.item(0) : null;
    this.solicitud = Object.assign({}, this.solicitudForm.value);
    this.solicitud.file = this.currentFileUpload;
    this.solicitud.idMunicipio = this.municipio.idMunicipio;

    console.log(this.solicitud)
    this.apiService.solicitudService.guardar(this.solicitud).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(
            (100 * event.loaded) / event.total
          );
        } else if (event instanceof HttpResponse) {
          if (event.ok) {
            this.currentFileUpload = null;
            this.progress.percentage = 0;
            Swal.fire(
              'Exito!',
              `Solicitud Enviada`,
              'success'
            )
          } else {
            this.apiService.notifService.error("Error", event);
          }
        }
      }, error => {
        Swal.fire(
          'Error',
          `Error al enviar la solicitud`,
          'error'
        )
      });
  }

}
