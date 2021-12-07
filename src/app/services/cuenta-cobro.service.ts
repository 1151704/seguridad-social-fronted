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
import { CuentaApi } from '../container/clientes-api copy';
import { CuentaCobro } from '../models/cuentacobro';


@Injectable({
  providedIn: 'root'
})
export class CuentaCobroService {

  baseUrl = API_REST + 'cuenta_cobro/';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getClienteDocumento(cedula: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}porCedula/${cedula}`);
  }

  generarCuenta(cuenta: CuentaApi) : Observable<CuentaCobro>{
    return this.http.post<CuentaCobro>(`${this.baseUrl}guardar`, cuenta, {headers: this.HttpHeaders})

  }
  obtenerCuentas(){
    return this.http.get<any>(`${this.baseUrl}todos`);
  }
}