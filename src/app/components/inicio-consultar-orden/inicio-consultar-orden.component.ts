import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Component, OnInit } from '@angular/core';
import { TIPOS_DOCUMENTOS } from 'src/app/data/datos.constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-consultar-orden',
  templateUrl: './inicio-consultar-orden.component.html',
  styleUrls: ['./inicio-consultar-orden.component.css']
})
export class InicioConsultarOrdenComponent implements OnInit {

  tipos = TIPOS_DOCUMENTOS;
  checkoutForm: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, 
    private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      tipoId: this.tipos[0].id,
      documento: '',
    });
  }

  onSubmit(customerData: any) {
    Swal.fire({
      title: 'Procesando datos',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
    const attemptAuth = this.apiService.clienteService.getClienteDocumento(customerData.documento);

    if (attemptAuth) {
      attemptAuth.subscribe(
        data => {
          Swal.close();
          if (data) {
            
            window.sessionStorage.setItem('orden', JSON.stringify(data.orden))
            window.sessionStorage.setItem('cliente', JSON.stringify(data.cliente))
            this.router.navigate(['/inicio/mostrar-orden']);
          } else {
            Swal.fire(
              'El cliente no existe',
            )
          }
        },
        error => {
          Swal.close();
        }
      );
    }
  }

}
