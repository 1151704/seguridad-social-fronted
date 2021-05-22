import { EmpresaSalidaApi } from './../../container/empresa-salida-api';
import { ApiService } from './../../core/api.service';
import { Empresa } from './../../models/empresa.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-empresa',
  templateUrl: './main-empresa.component.html',
  styleUrls: ['./main-empresa.component.css']
})
export class MainEmpresaComponent implements OnInit {

  proveedor: Empresa;
  proveedorEdit: Empresa;
  proveedorForm: FormGroup;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  nameFile: string = null;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {

    this.proveedor = new Empresa();


    this.proveedorForm = this.fb.group({
      nombre: ['', Validators.required],
      nit: ['', Validators.required],
      direccion: [''],
      telefono: [''],
      mision: [''],
      vision: [''],
      razonSocial: [''],
      email: [''],
      enable: [false],
      eliminado: [false]
    });

    this.apiService.empresaService.getEmpresaActual()
      .subscribe(data => {
        if (data) {
          this.proveedorForm.patchValue(data);
          this.proveedor = Object.assign({}, this.proveedorForm.value);
        } else {
          this.router.navigate(['/main/empresa']);
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
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles && this.selectedFiles.length != 0 ? this.selectedFiles.item(0) : null;

    this.proveedorEdit = Object.assign({}, this.proveedorForm.value);

    let itemProveedor = new EmpresaSalidaApi();

    itemProveedor.nombre = this.proveedorEdit.nombre;
    itemProveedor.telefono = this.proveedorEdit.telefono;
    itemProveedor.direccion = this.proveedorEdit.direccion;
    itemProveedor.email = this.proveedorEdit.email;
    itemProveedor.enable = this.proveedorEdit.enable;
    itemProveedor.file = this.currentFileUpload;

    this.apiService.empresaService.saveProveedor(itemProveedor).subscribe(
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
              `${this.proveedor.nombre} ha sido actualizado`,
              'success'
            )
            setTimeout(() => this.router.navigate(['/main/proveedores']), 1500);
          } else {
            this.apiService.notifService.error("Error", event);
          }
        }
      }, error => {
        Swal.fire(
          'Error',
          `Error al actualizar el proveedor`,
          'error'
        )
      });

  }

}
