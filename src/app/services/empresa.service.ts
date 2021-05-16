import { EmpresaSalidaApi } from './../container/empresa-salida-api';
import { HttpEvent } from '@angular/common/http';
import { EmpresaApi } from './../container/empresa-api';
import { Empresa } from './../models/empresa.model';
import { Observable } from 'rxjs';
import { API_REST } from './../url.constants';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseUrl = API_REST + 'empresa/';

  constructor(private http: HttpClient) { }

  getEmpresaActual(): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}actual`);
  }

  saveProveedor(proveedor: EmpresaSalidaApi): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    if (proveedor.file)
      formdata.append('file', proveedor.file);
    formdata.append('direccion', proveedor.direccion);
    formdata.append('email', proveedor.email);
    formdata.append('enable', proveedor.enable+"");
    formdata.append('nombre', proveedor.nombre);
    formdata.append('telefono', proveedor.telefono);
    formdata.append('razonSocial', proveedor.razonSocial);
    formdata.append('mision', proveedor.mision);
    formdata.append('vision', proveedor.vision);

    const req = new HttpRequest('POST', `${this.baseUrl}`, formdata, {
      reportProgress: true
    });

    return this.http.request(req);
  }
}
