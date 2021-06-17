import { TokenStorageService } from './../../services/auth/token-storage.service';
import { ApiService } from 'src/app/core/api.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-main-reportes',
  templateUrl: './main-reportes.component.html',
  styleUrls: ['./main-reportes.component.css']
})
export class MainReportesComponent implements OnInit {

  now = moment();
  estado = '';
  fechaInicio = this.now.format('YYYY-MM-DD');
  fechaFinal = this.now.format('YYYY-MM-DD');
  cargando = false;

  constructor(private apiService: ApiService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.token.validate();
  }

  buscarSolicitudes(){
    Swal.fire({
      title: 'Generando archivo',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.apiService.reporteService.getSolicitudesExcel(this.estado, this.fechaInicio, this.fechaFinal)
    .subscribe(response => {
      this.apiService.utilService.downloadFile(response, 'reporte_solicitudes_afiliacion', 'xlsx')
      this.cargando = false;
    }, error => {
      this.cargando = false;
      console.error(error)
      this.apiService.notifService.error('Error', error);
    });

  }

}
