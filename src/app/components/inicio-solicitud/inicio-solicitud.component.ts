import { Observable } from 'rxjs';
import { ActividadEconomica } from './../../models/actividad-economica.model';
import { TIPOS_DOCUMENTOS } from './../../data/datos.constants';
import { SolicitudSalidaApi } from './../../container/solicitudes-salida-api';
import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan.model';
import { TipoCliente } from 'src/app/models/tipo-cliente.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Municipio } from 'src/app/models/municipio.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Empresa } from './../../models/empresa.model';
import { API_REST } from 'src/app/url.constants';
import { Select2OptionData } from 'ng-select2';

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
  actividades: ActividadEconomica[] = []
  departamento: Departamento = null
  municipios: Municipio[] = []

  actividad: ActividadEconomica = null
  public proveedoresData: Observable<Array<Select2OptionData>>;
  selectOptions = {
    width: "100%",
    allowClear: true
  };

  filtrado = 1

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
      nombre2: [''],
      apellido1: ['', Validators.required],
      apellido2: [''],
      telefono: ['', Validators.required],
      lugarExpedicion: ['', Validators.required],
      fechaExpedicion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      correo: ['', Validators.required],
      direccion: ['', Validators.required],
      identificacion: ['', Validators.required],
      ibc: ['', Validators.required],
      profesion: ['', Validators.required],
      idTipoPlan: ['', Validators.required],
      observaciones: [''],
      idAsesor: [''],
      idTipoIdentificacion: [this.tipos[0].id, Validators.required],
      idTipoCliente: ['', Validators.required],
      idMunicipio: ['', Validators.required]
    });

    this.proveedoresData = this.apiService.actividadesEconomicasService.getActividadesDynamicList();

    this.apiService.planService.getPlanesActivos().subscribe(
      data => {
        this.tiposPlan = data.planes
        this.solicitudForm.patchValue({idTipoPlan: data.planes[0].id})
      }
    )
    this.apiService.tipoClienteService.getTiposClientes().subscribe(
      data => {
        this.tiposCliente = data.tiposCliente
        this.solicitudForm.patchValue({idTipoCliente: data.tiposCliente[0].id})
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
        this.solicitudForm.patchValue({idMunicipio: data[0].idMunicipio})
      }
    )
  }

  getFormValidationErrors() {
    
    let totalErrors = 0;

    let mensajes = '';
  
    Object.keys(this.solicitudForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.solicitudForm.get(key).errors;
      if (controlErrors != null) {
         totalErrors++;
         Object.keys(controlErrors).forEach(keyError => {
           mensajes += `El campo ${key} es requerido.<br>`;
           console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
      }
    });
    Swal.fire(
      `Formulario invalido.`,
      mensajes,
      'error'
    )
    console.log('Number of errors: ' ,totalErrors);
  }

  public changeProv(e: any): void {
    if (e) {
      let prov: ActividadEconomica = Object.assign({}, JSON.parse(e));
      this.actividad = prov;
      Swal.fire(
        `La actividad seleccionada es de nivel de riesgo ${this.actividad.nivelRiesgo}.`
      )
    }
  }

  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;
    this.nameFile = this.selectedFiles.item(0).name;
    this.currentFileUpload = null;
    this.progress.percentage = 0;
  }

  onSubmit() {

    if(!this.solicitudForm.valid) {
      this.getFormValidationErrors()
      return;
    }

    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles && this.selectedFiles.length != 0 ? this.selectedFiles.item(0) : null;

    this.solicitud = Object.assign({}, this.solicitudForm.value);

    if (!this.currentFileUpload) {
      Swal.fire('Formulario invalido', 'Debe ingresar el documento de identidad escaneado en PDF', 'error')
      return;
    }

    if (!this.actividad) {
      Swal.fire('Formulario invalido', 'Debe ingresar la actividad economica', 'error')
      return;
    }
    this.solicitud.idActividad = this.actividad.idActividad;
    this.solicitud.file = this.currentFileUpload;
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
              `Solicitud Registrada, se ha enviado un correo electronico '${this.solicitud.correo}', con la información de la solicitud`,
              'success'
            )
          } else {
            this.apiService.notifService.error("Error", event);
          }
        }
      }, error => {
        this.apiService.notifService.error("Error", error);
        Swal.fire(
          'Error',
          `Error al enviar la solicitud`,
          'error'
        )
      });
  }

}
