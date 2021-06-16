import { API_REST } from './../../url.constants';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { ApiService } from 'src/app/core/api.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  empresa: Empresa = new Empresa();
  urlBase: string = API_REST;
  checkoutForm: any;
  errorMessage = '';

  component: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.empresaService.getEmpresaActual().subscribe(
      data => {
        this.empresa = data;
        this.onOutletLoaded(this.component)
      }
    )
  }

  onOutletLoaded(component: any) {
    console.log(component)
    this.component = component
    component.empresa = this.empresa;
  }


}
