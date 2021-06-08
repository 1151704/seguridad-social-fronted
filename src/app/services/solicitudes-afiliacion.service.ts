import { PlanSalidaApi } from './../container/plan-salida-api';
import { PlanApi } from './../container/plan-api';
import { PlanesApi } from './../container/planes-api';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';
import { SolicitudesApi } from '../container/solicitudes-api';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesAfiliacionService {

  baseUrl = API_REST + 'solicitudes/';

  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<SolicitudesApi> {
    return this.http.get<SolicitudesApi>(this.baseUrl+'todos');
  }


}
