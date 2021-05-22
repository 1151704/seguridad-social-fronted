import { PlanSalidaApi } from './../../container/plan-salida-api';
import { ApiService } from './../../services/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { API_REST } from './../../url.constants';
import { Plan } from './../../models/plan.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-planes',
  templateUrl: './main-planes.component.html',
  styleUrls: ['./main-planes.component.css']
})
export class MainPlanesComponent implements OnInit {

  planes: Plan[] = [];

  urlBase: string = API_REST;

  showModal: boolean = false;

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.apiService.planService.getPlanes()
      .subscribe(data => {
        this.planes = [];
        if (data.planes) {
          this.planes = data.planes;
        }
      }, error => {
        this.apiService.notifService.error('Error', 'Error al cargar lista de planes');
        console.error(error);
      });
  }

  editPlan(proveedor: Plan): void {
    localStorage.setItem("editPlanId", proveedor.id.toString());
    this.router.navigate(['/main/plan-editar']);
  };

  cambiarEstado(proveedor : Plan): void {
    this.apiService.planService.cambiarEstadoPlan(proveedor.id)
    .subscribe(data => {
      this.ngOnInit();
    }, error => {
      this.apiService.notifService.error('Error', 'Error al cambiar el estado del plan');
      console.error(error);
    })
  }

}
