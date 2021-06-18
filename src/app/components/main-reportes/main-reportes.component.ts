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
    estadoPago = '';
    estadoCliente = '';
    fechaInicio = this.now.format('YYYY-MM-DD');
    fechaFinal = this.now.format('YYYY-MM-DD');
    cargando = false;
    filtrado = 's'

    constructor(private apiService: ApiService, private token: TokenStorageService) { }

    ngOnInit(): void {
        this.token.validate();
    }

    buscarSolicitudes() {
        Swal.fire({
            title: 'Generando archivo',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        if (this.filtrado == 's') {
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
        if (this.filtrado == 'c') {
            this.apiService.reporteService.getClientesExcel(this.estadoCliente, this.fechaInicio, this.fechaFinal)
                .subscribe(response => {
                    this.apiService.utilService.downloadFile(response, 'reporte_clientes', 'xlsx')
                    this.cargando = false;
                }, error => {
                    this.cargando = false;
                    console.error(error)
                    this.apiService.notifService.error('Error', error);
                });
        }
        if (this.filtrado == 'p') {
            this.apiService.reporteService.getOrdenesExcel(this.estadoCliente, this.fechaInicio, this.fechaFinal)
                .subscribe(response => {
                    this.apiService.utilService.downloadFile(response, 'reporte_ordenes', 'xlsx')
                    this.cargando = false;
                }, error => {
                    this.cargando = false;
                    console.error(error)
                    this.apiService.notifService.error('Error', error);
                });
        }

    }

}
