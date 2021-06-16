import { ClientesApi } from './../container/clientes-api';
import { Cliente } from './../models/cliente.model';
import { Injectable } from '@angular/core';
import { PlanSalidaApi } from './../container/plan-salida-api';
import { PlanApi } from './../container/plan-api';
import { PlanesApi } from './../container/planes-api';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API_REST } from './../url.constants';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = API_REST + 'clientes/';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClientesApi>{
    return this.http.get<ClientesApi>(`${this.baseUrl}todos`);

  }

  getClienteId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}porId/${id}`);
  }

  getClienteDocumento(cedula: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}porCedula/${cedula}`);
  }

  guardarCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}save`, cliente, {headers: this.HttpHeaders})

  }
}
