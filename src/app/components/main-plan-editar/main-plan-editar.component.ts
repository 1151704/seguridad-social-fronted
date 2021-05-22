import { PlanSalidaApi } from './../../container/plan-salida-api';
import { ApiService } from './../../core/api.service';
import { Plan } from './../../models/plan.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-plan-editar',
  templateUrl: './main-plan-editar.component.html',
  styleUrls: ['./main-plan-editar.component.css']
})
export class MainPlanEditarComponent implements OnInit {

  proveedor: Plan;
  proveedorEdit: Plan;
  proveedorForm: FormGroup;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  nameFile: string = null;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {

    let proveedorId = window.localStorage.getItem("editPlanId");
    if (!proveedorId) {
      this.router.navigate(['/main/planes']);
      return;
    }

    this.proveedor = new Plan();


    this.proveedorForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      enable: [false],
    });

    this.apiService.planService.getPlanId(proveedorId)
      .subscribe(data => {
        if (data.plan) {
          this.proveedorForm.patchValue(data.plan);
          this.proveedor = Object.assign({}, this.proveedorForm.value);
        } else {
          this.router.navigate(['/main/planes']);
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

    let itemProveedor = new PlanSalidaApi();

    itemProveedor.id = this.proveedor.id;
    itemProveedor.titulo = this.proveedorEdit.titulo;
    itemProveedor.descripcion = this.proveedorEdit.descripcion;
    itemProveedor.enable = this.proveedorEdit.enable;
    itemProveedor.file = this.currentFileUpload;

    this.apiService.planService.guardarPlan(itemProveedor).subscribe(
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
              `El plan ha sido actualizado`,
              'success'
            )
            setTimeout(() => this.router.navigate(['/main/planes']), 500);
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
