import { Usuario } from './../../models/usuario.model';
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
import { API_REST } from 'src/app/url.constants';

@Component({
  selector: 'app-main-solicitudes-editar',
  templateUrl: './main-solicitudes-editar.component.html',
  styleUrls: ['./main-solicitudes-editar.component.css']
})
export class MainSolicitudesEditarComponent implements OnInit {

  proveedor: Solicitud;
  proveedorEdit: Solicitud;
  proveedorForm: FormGroup;

  solicitudForm: FormGroup;

  usuarios: Usuario[]

  urlBase: string = API_REST;

  filtrado = 1

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.filtrado = 1

    let proveedorId = window.localStorage.getItem("editSolicitudId");
    if (!proveedorId) {
      this.router.navigate(['/main/solicitudes']);
      return;
    }

    this.proveedorForm = this.fb.group({
      estadoSolicitud: ['', Validators.required],
      respuesta: ['', Validators.required],
    });

    this.solicitudForm = this.fb.group({
      idAsesor: ['', Validators.required],
    });

    this.apiService.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data.usuarios
    })

    this.apiService.solicitudService.getSolicitudPorId(proveedorId)
      .subscribe(data => {
        if (data.solicitud) {
          this.proveedorForm.patchValue(data.solicitud);
          this.proveedor = data.solicitud
          if (data.solicitud.ssptUsuario) {
            this.solicitudForm.patchValue({ idAsesor: data.solicitud.ssptUsuario.id })
          }
        } else {
          this.router.navigate(['/main/solicitudes']);
        }
      });
  }

  onSubmitSolicitud() {
    if (this.proveedor.estadoSolicitud != 'PENDIENTE') {
      Swal.fire(
        'Operación Invalida',
        'No puede cambiar el asesor a una solicitud respondida.',
        'warning'
      )
    }
    let { idAsesor } = this.solicitudForm.value

    if (!idAsesor || idAsesor == '') {
      Swal.fire(
        'Operación Invalida',
        'Debe seleccionar un asesor.',
        'warning'
      )
    }
    Swal.fire({
      title: 'Procesando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.apiService.solicitudService.reasignarSolicitud(this.proveedor.id, idAsesor).subscribe(data => {
      Swal.fire(
        'Exito!',
        `La solicitud ha sido reasinada`,
        'success')
      this.ngOnInit()
    }, error => {
      Swal.fire(
        'Error',
        `Error al reasignar la solicitud`,
        'error')
    })
  }

  onSubmit() {
    if (this.proveedor.estadoSolicitud != 'PENDIENTE') {
      Swal.fire(
        'Operación Invalida',
        'No puede volver a responder la solicitud.',
        'warning'
      )
    }
    Swal.fire({
      title: 'Procesando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.proveedorEdit = Object.assign({}, this.proveedorForm.value);

    let itemProveedor = new SolicitudRespuestaSalidaApi();

    itemProveedor.observacion = this.proveedorEdit.respuesta;
    itemProveedor.respuesta = this.proveedorEdit.estadoSolicitud;

    this.apiService.solicitudService.responderSolicitud(this.proveedor.id, itemProveedor).subscribe(
      data => {
        this.ngOnInit()
        Swal.fire(
          'Exito!',
          `La solicitud ha sido respondida`,
          'success')
      }, error => {
        Swal.fire(
          'Error',
          `Error al responder la solicitud`,
          'error')
      }
    )

  }
}



