import { File } from "./file.model";
import { Usuario } from "./usuario.model";

export class CuentaCobro {

    id: number;
    asesor: Usuario;
    createAt: string;
    total: number;
    estadoOrden: string;
  
  }
  