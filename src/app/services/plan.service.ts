import { PlanSalidaApi } from './../container/plan-salida-api';
import { PlanApi } from './../container/plan-api';
import { PlanesApi } from './../container/planes-api';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  baseUrl = API_REST + 'plan/';

  constructor(private http: HttpClient) { }

  getPlanes(): Observable<PlanesApi> {
    return this.http.get<PlanesApi>(this.baseUrl+'todos');
  }

  getPlanesActivos(): Observable<PlanesApi> {
    return this.http.get<PlanesApi>(this.baseUrl+'activos');
  }

  getPlanId(id: string): Observable<PlanApi> {
    return this.http.get<PlanApi>(`${this.baseUrl}${id}`);
  }

  guardarPlan(proveedor: PlanSalidaApi): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    if (proveedor.file)
      formdata.append('file', proveedor.file);
    formdata.append('titulo', proveedor.titulo);
    formdata.append('descripcion', proveedor.descripcion);
    formdata.append('enable', ""+proveedor.enable);
    if (proveedor.id) 
      formdata.append('id', proveedor.id+"");   

    const req = new HttpRequest('POST', `${this.baseUrl}`, formdata, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  cambiarEstadoPlan(id: number): Observable<PlanApi> {
    return this.http.post<PlanApi>(`${this.baseUrl}cambiarEstado/${id}`, {});
  }

}
