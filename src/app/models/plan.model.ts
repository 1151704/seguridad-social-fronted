import { File } from "./file.model";

export class Plan {

    id: number;
    titulo: string;
    descripcion: string;
    enable: boolean;
    
    file: File;

}