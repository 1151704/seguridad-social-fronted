import { Component, OnInit } from '@angular/core';
import { TIPOS_DOCUMENTOS } from 'src/app/data/datos.constants';

@Component({
  selector: 'app-inicio-consultar-orden',
  templateUrl: './inicio-consultar-orden.component.html',
  styleUrls: ['./inicio-consultar-orden.component.css']
})
export class InicioConsultarOrdenComponent implements OnInit {

  tipos = TIPOS_DOCUMENTOS;
  constructor() { }

  ngOnInit(): void {
  }

}
