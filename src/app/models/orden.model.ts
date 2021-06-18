import { Cliente } from './cliente.model';

export class Orden {

    id: number;
    fechaOrden: Date;
    fechaLimite: Date;
    fechaPago: Date;
    precio: number;
    estadoOrden: String;
    cliente: Cliente;
    enable: boolean;
}
