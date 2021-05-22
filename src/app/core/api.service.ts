import { UsuarioService } from './../services/usuario.service';
import { PlanService } from './../services/plan.service';
import { EmpresaService } from './../services/empresa.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificacionService } from './notificacion.service';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  empresaService: EmpresaService;
  planService: PlanService;
  usuarioService: UsuarioService;

  constructor(private http: HttpClient, public notifService: NotificacionService, public utilService: UtilsService) {
    this.empresaService = new EmpresaService(http)
    this.planService = new PlanService(http)
    this.usuarioService = new UsuarioService(http)
  }

}
