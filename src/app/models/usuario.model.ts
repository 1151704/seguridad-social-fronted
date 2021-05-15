import { TipoIdentificacion } from './tipo-identificacion.model';
import { Empresa } from './empresa.model';
import { Rol } from './rol.model';

export class Usuario {

    nombres: string;
    apellidos: string;
    email: string;
    identificacion: string;
    username: string;
    fechaRegistro: string;
    tipoId: TipoIdentificacion;
    empresa: Empresa;
    rol: Rol;
    enable: boolean;

}
