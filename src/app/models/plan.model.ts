import { File } from "./file.model";

export class Plan {

    id: number;
    titulo: string;
    descripcion: string;
    color: string;
    servicios: string;
    precio: number;
    enable: boolean;
    
    file: File;

}