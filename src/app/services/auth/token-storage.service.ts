import { JwtResponse } from './../../auth/jwt-response';
import { Usuario } from './../../models/usuario.model';
import { TOKEN } from './../../url.constants';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  valido: boolean = false;
  isLoggedIn: Observable<boolean>;
  private storage = window.localStorage;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  signOut() {
    this.storage.clear();
  }

  async isToken() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.valido = await this.isLoggedIn.toPromise();

    if (!this.valido) {
      this.signOut();
    }
    return this.valido;
  }

  public saveToken(token: string) {
    this.storage.removeItem(TOKEN.TOKEN_KEY);
    this.storage.setItem(TOKEN.TOKEN_KEY, token);
  }

  public getToken(): string {
    return this.storage.getItem(TOKEN.TOKEN_KEY);
  }

  public saveUser(user: Usuario) {
    this.storage.removeItem(TOKEN.USUARIO_KEY);
    this.storage.setItem(TOKEN.USUARIO_KEY, JSON.stringify(user));
  }

  public getUser(): Usuario {
    let u: Usuario = new Usuario();
    let usuario = JSON.parse(this.storage.getItem(TOKEN.USUARIO_KEY));
    Object.assign(u, usuario);
    return u;
  }

  public isRol(rol: string):boolean {

    try {
      return this.getUser().rol.rol == rol;
    } catch (error) {
    }

    return false;
  }

  public getInfo(): JwtResponse {
    return new JwtResponse(
      this.getToken(),
      "Bearer ",
      this.getUser());
  }

  public validate() {
    this.isToken().then(data => {
      if (!data) {
        this.router.navigate(['inicio/signin']);
      }
    }, error => {
      this.router.navigate(['inicio/signin']);
    });
  }
}
