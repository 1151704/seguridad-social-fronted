import { API_REST } from './../../url.constants';
import { ApiService } from './../../core/api.service';
import { AuthService } from './../../services/auth/auth.service';
import { Empresa } from './../../models/empresa.model';
import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-inicio-principal',
  templateUrl: './inicio-principal.component.html',
  styleUrls: ['./inicio-principal.component.css'],
})
export class InicioPrincipalComponent implements OnInit {
  
  empresa: Empresa = null
  planes: Plan[] = []

  urlBase: string = API_REST;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.empresaService.getEmpresaActual().subscribe(
      data => {
        this.empresa = data
      }
    )
    this.apiService.planService.getPlanesActivos().subscribe(
      data => {
        if (data.planes) {
          this.planes = data.planes
        }
      }
    )
  }

}
