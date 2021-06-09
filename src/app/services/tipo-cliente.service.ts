import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_REST } from 'src/app/url.constants';
import { Injectable } from '@angular/core';
import { TiposClientesApi } from '../container/tipos-clientes-api';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {

  baseUrl = API_REST + 'tipoDeClientes/';

  constructor(private http: HttpClient) { }

  getTiposClientes(): Observable<TiposClientesApi> {
    return this.http.get<TiposClientesApi>(this.baseUrl+'todos');
  }

}
