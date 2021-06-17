import { OrdenesApi } from './../container/ordenes-api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Observable } from 'rxjs';
import { Orden } from '../models/orden.model';
@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  baseUrl = API_REST + 'ordenes/';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getOrdenes(): Observable<OrdenesApi>{
    return this.http.get<OrdenesApi>(this.baseUrl+'all');

  }

  generarOrdenes(): Observable<Boolean> {
    
    return this.http.get<Boolean>(this.baseUrl+'generarTodos');
  }

  pagar(id : string): Observable<Boolean> {
    return this.http.get<Boolean>(`${this.baseUrl}pagar/${id}`);
  }

}
