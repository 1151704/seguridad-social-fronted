import { ClientesApi } from './../container/clientes-api';
import { Cliente } from './../models/cliente.model';
import { Injectable } from '@angular/core';
import { PlanSalidaApi } from './../container/plan-salida-api';
import { PlanApi } from './../container/plan-api';
import { PlanesApi } from './../container/planes-api';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Clientess } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClientessService {

  baseUrl = API_REST + '';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClientesApi>{
    //alert("ejecutao")
    return this.http.get<ClientesApi>(this.baseUrl + 'todos');

  }

  getClienteId(id: string): Observable<Clientess>{
    return this.http.get<Clientess>(`${this.baseUrl}find/${id}`);
    alert("ejecutao");
  }

  getClienteDocumento(cedula: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}porCedula/${cedula}`);
  }

  guardarCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}save`, cliente, {headers: this.HttpHeaders})

  }

  guardar(cliente: Clientess) : Observable<Clientess> {
    return this.http.post<Clientess>(`${this.baseUrl}save`, cliente, {headers: this.HttpHeaders})
  }

  getClientess() : Observable<Clientess []> {
    return this.http.get<Clientess []>(`${this.baseUrl}clientes`);
  }
  eliminar(id:number): Observable<Clientess>{

    return this.http.delete<Clientess>(`${this.baseUrl}delete/${id}`);
  }

}