import { Cliente } from './cliente.model';
import { File } from "./file.model";

export class Orden {

    id: number;
    fechaOrden: Date;
    fechaLimite: Date;
    fechaPago: Date;
    precio: number;
    cliente: Cliente;

}
