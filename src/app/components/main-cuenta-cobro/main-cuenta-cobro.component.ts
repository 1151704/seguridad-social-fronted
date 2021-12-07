import { Component, OnInit } from '@angular/core';
import { CuentaApi } from 'src/app/container/cuenta-api';

import { ApiService } from 'src/app/core/api.service';
import { CuentaCobro } from 'src/app/models/cuentacobro';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-cuenta-cobro',
  templateUrl: './main-cuenta-cobro.component.html',
  styleUrls: ['./main-cuenta-cobro.component.css']
})
export class MainCuentaCobroComponent implements OnInit {
  cuentas : CuentaCobro [] = [];
  cuenta : CuentaApi= new CuentaApi();
   usuarios: Usuario[] = [];
   
  constructor(private apiService: ApiService) {  }

  ngOnInit(): void {

    this.apiService.cuentaCobroService.obtenerCuentas()
    .subscribe(data => {
      if(data){

        this.cuentas=data;
      }
    })

    this.apiService.usuarioService.getUsuarios()
      .subscribe(data => {
        this.usuarios = [];
        if (data.usuarios) {
          this.usuarios = data.usuarios;
        }
      });
  }

  generarCuenta(){
    this.apiService.cuentaCobroService.generarCuenta(this.cuenta)
      .subscribe(data => {
        this.usuarios = [];
        if (data.asesor) {
          this.cuenta.id_asesor = data.asesor.id;
        }
        Swal.fire(
          'Exito!',
          `Se ha generado correctamente`,
          'success'
        )
      });
  }

}
