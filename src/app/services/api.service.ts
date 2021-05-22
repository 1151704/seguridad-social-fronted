import { PlanService } from './plan.service';
import { NotificacionService } from './notificacion.service';
import { HttpClient } from '@angular/common/http';
import { EmpresaService } from './empresa.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  empresaService: EmpresaService;
  notifService: NotificacionService;
  planService: PlanService;

  constructor(private http: HttpClient) {
    this.empresaService = new EmpresaService(http)
    this.planService = new PlanService(http)
    this.notifService = new NotificacionService()
  }

}
