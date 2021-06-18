import { Observable } from 'rxjs';
import { ActividadEconomica } from './../models/actividad-economica.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_REST } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class ActividadesEconomicasService {

  baseUrl = API_REST + 'actividades/';

  constructor(private http: HttpClient) { }

  getActividades(): Observable<ActividadEconomica[]> {
    return this.http.get<ActividadEconomica[]>(this.baseUrl + 'todos');
  }

  getActividadesDynamicList() {
    return Observable.create(obs => {
      let list = [];
      this.getActividades().subscribe(data => {
        data.forEach(element => {
          list.push({
            id: JSON.stringify(element),
            text: `${element.nivelRiesgo}${element.codigoActividad} - ${element.nombreActividad})`,
            selected: false
          });
        });
        obs.next(list);
        obs.complete();
      });
    });
  }

}
