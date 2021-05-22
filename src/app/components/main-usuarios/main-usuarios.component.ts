import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-usuarios',
  templateUrl: './main-usuarios.component.html',
  styleUrls: ['./main-usuarios.component.css']
})
export class MainUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  info: Usuario;

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.info = this.token.getUser();
    this.apiService.usuarioService.getUsuarios()
      .subscribe(data => {
        this.usuarios = [];
        if (data.usuarios) {
          this.usuarios = data.usuarios;
        }
      });
  }


  editUsuario(usuario: Usuario) {

    this.apiService.usuarioService.saveEstado(!usuario.enable, usuario.identificacion)
    .subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.error(error)
      this.apiService.notifService.error('Error', error);
    })

  }

  adminUsuario(usuario: Usuario) {
    localStorage.removeItem("editUsuarioId");
    localStorage.setItem("editUsuarioId", usuario.identificacion);
    this.router.navigate(['/main/usuario-editar']);
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
