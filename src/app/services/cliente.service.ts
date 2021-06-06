import { ClientesApi } from './../container/clientes-api';
import { Cliente } from './../models/cliente.model';
import { Injectable } from '@angular/core';
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

  baseUrl = API_REST + 'clientes/';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClientesApi>{
    return this.http.get<Cliente>(this.baseUrl+'todos');

  }

  getClienteId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}+"porId/"${id}`);
  }
}
