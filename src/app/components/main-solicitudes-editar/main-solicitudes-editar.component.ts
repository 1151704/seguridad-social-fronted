import { SolicitudRespuestaSalidaApi } from './../../container/solicitud-respuesta-salida-api';
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

    this.proveedorForm = this.fb.group({
      observaciones: ['', Validators.required],
      respuesta: ['', Validators.required],
    });

    this.apiService.solicitudService.getSolicitudPorId(proveedorId)
      .subscribe(data => {
        if (data.solicitud) {
          this.proveedorForm.patchValue(data.solicitud);
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

  onSubmit() {
    this.proveedorEdit = Object.assign({}, this.proveedorForm.value);

    let itemProveedor = new SolicitudRespuestaSalidaApi();

    itemProveedor.observacion = this.proveedorEdit.observaciones;
    itemProveedor.respuesta = this.proveedorEdit.respuesta;

    this.apiService.solicitudService.responderSolicitud(this.proveedor.id, itemProveedor).subscribe(
      data => {
        console.log(data)
      }, error => {
        console.log(error)
      }
    )

    // itemProveedor.file = this.currentFileUpload;

    // this.apiService.solicitudService.guardar(itemProveedor).subscribe(
    //   event => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progress.percentage = Math.round(
    //         (100 * event.loaded) / event.total
    //       );
    //     } else if (event instanceof HttpResponse) {
    //       if (event.ok) {
    //         this.currentFileUpload = null;
    //         this.progress.percentage = 0;
    //         Swal.fire(
    //           'Exito!',
    //           `La solicitud ha sido actualizado`,
    //           'success'
    //         )
    //         setTimeout(() => this.router.navigate(['/main/solictudes']), 500);
    //       } else {
    //         this.apiService.notifService.error("Error", event);
    //       }
    //     }
    //   }, error => {
    //     Swal.fire(
    //       'Error',
    //       `Error al actualizar el plan`,
    //       'error'
    //     )
    //   });

  }
}



