import { File } from "./file.model";
import { Usuario } from "./usuario.model";

export class CuentaCobro {

    id: number;
    asesor: Usuario;
    fecha: Date;
    total: number;
    estado: Boolean;
  
  }
  