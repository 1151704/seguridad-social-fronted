import { Departamento } from './../models/departamento.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_REST } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  baseUrl = API_REST + 'departamento/';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.baseUrl+'todos');
  }

}
