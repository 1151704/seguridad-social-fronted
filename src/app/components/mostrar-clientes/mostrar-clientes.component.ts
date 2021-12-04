import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Clientess } from 'src/app/models/cliente';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit {

  clientes : Clientess[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.clienteServices.getClientess().subscribe(
      clientes => this.clientes=clientes
    )
     
  }

  delete(id : number): void{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro!',
      text: "No podras recuperar al cliente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI, Eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.clienteServices.eliminar(id).subscribe(
          response => {
            this.clientes= this.clientes.filter(cli => cli.id !== id)
            
            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          }
        )
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'tu cliente no fue eliminado :)',
          'error'
        )
      }
    })

   this.apiService.clienteServices.eliminar(id).subscribe()
  }

}
