import { File } from "./file.model";

export class Cliente {

    id: number;
    identificacion: string;
    correo: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    telefono: string;
    direccion: string;
    idTipoIdentificacion: number;
    idTipoCliente: number;
    idMunicipio: number;
    idTipoPlan: number;
    file: File;

}
