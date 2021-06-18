import { SolicitudesBusquedaSalidaApi } from './../container/solicitudes-busqueda-salida-api';
import { SolicitudRespuestaSalidaApi } from './../container/solicitud-respuesta-salida-api';
import { SolicitudApi } from './../container/solicitud-api';
import { SolicitudSalidaApi } from './../container/solicitudes-salida-api';
import { PlanSalidaApi } from './../container/plan-salida-api';
import { PlanApi } from './../container/plan-api';
import { PlanesApi } from './../container/planes-api';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';
import { SolicitudesApi } from '../container/solicitudes-api';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesAfiliacionService {

  baseUrl = API_REST + 'solicitudes/';

  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<SolicitudesApi> {
    return this.http.get<SolicitudesApi>(this.baseUrl+'todos');
  }

  getSolicitudesBusqueda(salida: SolicitudesBusquedaSalidaApi): Observable<SolicitudesApi> {
    return this.http.post<SolicitudesApi>(this.baseUrl+'busqueda', salida);
  }

  getSolicitudPorId(id: string): Observable<SolicitudApi> {
    return this.http.get<SolicitudApi>(this.baseUrl+id);
  }

  responderSolicitud(id: number, salida: SolicitudRespuestaSalidaApi): Observable<SolicitudApi> {
    return this.http.post<SolicitudApi>(this.baseUrl+'responder/'+id, salida);
  }

  reasignarSolicitud(id: number, idAsesor: number): Observable<SolicitudApi> {
    return this.http.get<SolicitudApi>(`${this.baseUrl}cambiar-asesor/${id}?idAsesor=${idAsesor}`)
  }

  guardar(proveedor: SolicitudSalidaApi): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    if (proveedor.file)
      formdata.append('file', proveedor.file);
    formdata.append('nombre1', proveedor.nombre1);
    formdata.append('nombre2', proveedor.nombre2);
    formdata.append('apellido1', proveedor.apellido1);
    formdata.append('apellido2', proveedor.apellido2);
    formdata.append('telefono', proveedor.telefono);
    formdata.append('direccion', proveedor.direccion);
    formdata.append('correo', proveedor.correo);
    formdata.append('identificacion', proveedor.identificacion);
    formdata.append('ibc', proveedor.ibc);
    formdata.append('lugarExpedicion', proveedor.lugarExpedicion);
    formdata.append('fechaNacimiento', proveedor.fechaNacimiento);
    formdata.append('fechaExpedicion', proveedor.fechaExpedicion);
    formdata.append('idAsesor', proveedor.idAsesor?proveedor.idAsesor.toString():'');
    formdata.append('idActividad', proveedor.idActividad?proveedor.idActividad.toString():'');
    formdata.append('idTipoIdentificacion', proveedor.idTipoIdentificacion.toString());
    formdata.append('idTipoCliente', proveedor.idTipoCliente.toString());
    formdata.append('idMunicipio', proveedor.idMunicipio.toString());
    formdata.append('idTipoPlan', proveedor.idTipoPlan.toString());
    formdata.append('profesion', proveedor.profesion);
    formdata.append('observaciones', proveedor.observaciones);

    const req = new HttpRequest('POST', `${this.baseUrl}save`, formdata, {
      reportProgress: true
    });

    return this.http.request(req);
  }


}
