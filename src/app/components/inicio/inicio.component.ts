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

  constructor(private apiService: ApiService){
    
  }

  ngOnInit() {
    this.apiService.empresaService.getEmpresaActual().subscribe(
      data => {
        console.log(data);
        this.empresa = data;
      }
    )
  }
}
