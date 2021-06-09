import { TipoIdentificacion } from './../../models/tipo-identificacion.model';
import { Component, OnInit } from '@angular/core';
import { SolicitudSalidaApi } from 'src/app/container/solicitudes-salida-api';
import { Solicitud } from 'src/app/models/solicitud-afiliacion';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ApiService } from './../../core/api.service';

@Component({
  selector: 'app-main-solicitudes-editar',
  templateUrl: './main-solicitudes-editar.component.html',
  styleUrls: ['./main-solicitudes-editar.component.css']
})
export class MainSolicitudesEditarComponent implements OnInit {

  proveedor: Solicitud;
  proveedorEdit: Solicitud;
  proveedorForm: FormGroup;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  nameFile: string = null;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }


  ngOnInit() {
  let proveedorId = window.localStorage.getItem("editSolicitudId");
  if (!proveedorId) {
    this.router.navigate(['/main/solicitudes']);
    return;
  }

  this.proveedor = new Solicitud();

  // estadoSolicitud: string;
  // observaciones: string;
  // respuesta: string;
  // ssptCliente: Cliente;
  // ssptPlan: Plan;
  // file: File;

  this.proveedorForm = this.fb.group({
    estadoSolicitud: [false],
    observaciones: ['', Validators.required],
    repuesta: ['', Validators.required],


    // ssptPlan.titulo: ['', Validators.required],
    // ssptCliente.nombre1: ['', Validators.required],
    // ssptCliente.nombre2: ['', Validators.required],
    // ssptCliente.apellido1: ['', Validators.required],
    // ssptCliente.apellido2: ['', Validators.required],
    // ssptCliente.identificacion: ['', Validators.required],

  });

  this.apiService.planService.getSolicitudId(proveedorId)
    .subscribe(data => {
      if (data.solicitud) {
        this.proveedorForm.patchValue(data.plan);
        this.proveedor = data.solicitud
      } else {
        this.router.navigate(['/main/solicitudes']);
      }
    });
}

handleFileInput(event: any) {
  this.selectedFiles = event.target.files;
  this.nameFile = this.selectedFiles.item(0).name;
  this.currentFileUpload = null;
  this.progress.percentage = 0;
}

onsubmit() {
  this.progress.percentage = 0;

  this.currentFileUpload = this.selectedFiles && this.selectedFiles.length != 0 ? this.selectedFiles.item(0) : null;

  this.proveedorEdit = Object.assign({}, this.proveedorForm.value);

  let itemProveedor = new Solicitud();

  itemProveedor.estadoSolicitud = this.proveedorEdit.estadoSolicitud;
  itemProveedor.observaciones = this.proveedorEdit.observaciones;
  itemProveedor.respuesta = this.proveedorEdit.respuesta;
  // itemProveedor.file = this.currentFileUpload;

  this.apiService.solicitudService.guardar(itemProveedor).subscribe(
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
            `La solicitud ha sido actualizado`,
            'success'
          )
          setTimeout(() => this.router.navigate(['/main/solictudes']), 500);
        } else {
          this.apiService.notifService.error("Error", event);
        }
      }
    }, error => {
      Swal.fire(
        'Error',
        `Error al actualizar el plan`,
        'error'
      )
    });

}
}



