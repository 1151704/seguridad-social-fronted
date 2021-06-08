import { File } from "./file.model";

export class Cliente {

    id: number;
    identificacion: string;
    correo: string;
    nombre1: string;
    
    apellido1: string;
    
    telefono: string;
    direccion: string;
    fechaNacimiento: Date;
    estadoCliente: string;

    file: File;

}