import { Usuario } from '../models/usuario.model';

export class JwtResponse {
  accessToken: string;
  type: string;
  usuario: Usuario;

  constructor(accessToken: string,
    type: string,
    usuario: Usuario) {
    this.accessToken = accessToken;
    this.type = type;
    this.usuario = usuario;
  }

}
