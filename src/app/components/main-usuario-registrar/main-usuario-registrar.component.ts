import { Rol } from './../../models/rol.model';
import { UsuarioSalidaApi } from './../../container/usuario-salida-api';
import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { TIPOS_DOCUMENTOS, ROLES } from './../../data/datos.constants';
import { JwtResponse } from './../../auth/jwt-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion.model';

@Component({
  selector: 'app-main-usuario-registrar',
  templateUrl: './main-usuario-registrar.component.html',
  styleUrls: ['./main-usuario-registrar.component.css']
})
export class MainUsuarioRegistrarComponent implements OnInit {

  usuario: Usuario;
  usuarioEdit: Usuario;
  usuarioForm: FormGroup;

  info: JwtResponse;

  tipos = TIPOS_DOCUMENTOS;

  roles: Rol[] = ROLES;
  rol: Rol = ROLES[1];

  constructor(private token: TokenStorageService, private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.token.validate();
    this.info = this.token.getInfo();
    this.usuario = new Usuario();

    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      identificacion: ['', Validators.required],
      tipoId: [this.tipos[0].value, Validators.required]
    });
  }

  onSubmit() {

    this.usuarioEdit = Object.assign({}, this.usuarioForm.value);

    this.usuarioEdit.tipoIdentificacion = new TipoIdentificacion();
    this.usuarioEdit.tipoIdentificacion.tipo = this.usuarioForm.get('tipoId').value;

    let usuarioSave = new UsuarioSalidaApi();

    usuarioSave.apellidos = this.usuarioEdit.apellidos;
    usuarioSave.email = this.usuarioEdit.email;
    usuarioSave.enable = true;
    usuarioSave.identificacion = this.usuarioEdit.identificacion;

    usuarioSave.nombres = this.usuarioEdit.nombres;
    usuarioSave.tipoId = this.usuarioForm.get('tipoId').value;
    usuarioSave.rol = this.rol ? this.rol.rol : '';

    this.apiService.usuarioService.saveUsuario(usuarioSave).subscribe(data => {
      this.router.navigate(['/main/usuarios']);
    }, error => {
      console.log(error)
      this.apiService.notifService.error('Error', error);
    });
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
