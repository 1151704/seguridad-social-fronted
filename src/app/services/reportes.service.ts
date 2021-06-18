import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_REST } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  baseUrl = API_REST + 'reportes/';

  constructor(private http: HttpClient) { }

  getSolicitudesExcel(estado: string, fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get(`${this.baseUrl}solicitudes?format=xlsx`, {
      responseType: 'blob',
      params: { estado: estado, fechaInicio: fechaInicio, fechaFinal: fechaFin }
    });
  }

  getClientesExcel(estado: string, fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get(`${this.baseUrl}clientes?format=xlsx`, {
      responseType: 'blob',
      params: { estado: estado, fechaInicio: fechaInicio, fechaFinal: fechaFin }
    });
  }
  
}
