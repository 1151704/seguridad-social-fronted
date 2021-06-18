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

  filtrado = 1

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    let proveedorId = window.localStorage.getItem("editSolicitudId");
    if (!proveedorId) {
      this.router.navigate(['/main/solicitudes']);
      return;
    }

    this.proveedorForm = this.fb.group({
      estadoSolicitud: ['', Validators.required],
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

  onSubmit() {
    if (this.proveedor.estadoSolicitud!='PENDIENTE'){
      Swal.fire(
        'Operación Invalida',
        'No puede volver a responder la solicitud.',
        'warning'
      )
    }

    this.proveedorEdit = Object.assign({}, this.proveedorForm.value);

    let itemProveedor = new SolicitudRespuestaSalidaApi();

    itemProveedor.observacion = this.proveedorEdit.respuesta;
    itemProveedor.respuesta = this.proveedorEdit.estadoSolicitud;

    this.apiService.solicitudService.responderSolicitud(this.proveedor.id, itemProveedor).subscribe(
      data => {
        Swal.fire(
          'Exito!',
          `La solicitud ha sido respondida`,
          'success')
        this.router.navigate(['/main/solicitudes'])
      }, error => {
        Swal.fire(
          'Error',
          `Error al responder la solicitud`,
          'error')
      }
    )

  }
}



