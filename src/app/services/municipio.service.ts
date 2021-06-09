import { Municipio } from './../models/municipio.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_REST } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  baseUrl = API_REST + 'municipio/';

  constructor(private http: HttpClient) { }

  getMunicipios(id: number): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(this.baseUrl+'getPorDepartamento/'+id);
  }
}
