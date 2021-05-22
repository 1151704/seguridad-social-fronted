import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-usuario',
  templateUrl: './main-usuario.component.html',
  styleUrls: ['./main-usuario.component.css']
})
export class MainUsuarioComponent implements OnInit {

  usuario: Usuario = null;

  formPassword: FormGroup;

  constructor(private token: TokenStorageService, private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.token.validate();
    this.usuario = this.token.getUser();

    this.formPassword = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['']
    },
      { validator: this.checkPasswords });

  }

  checkPasswords(group: FormGroup) {
    let pass = group.value.password;
    let confirmPass = group.value.confirmPassword;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    this.apiService.usuarioService.savePassword(this.formPassword.value.password)
    .subscribe(data => {
      if (data) {
        this.apiService.notifService.success('Hecho', 'La contraseña ha sido actualizada');
        this.router.navigate(['/main']);
      } else {
        this.apiService.notifService.error('Error', 'No se actualizo la contraseña');
      }
    }, error=> {
      console.log(error);
      this.apiService.notifService.error('Error', error);
    })
    this.formPassword.reset();

  }

}
