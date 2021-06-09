import { Cliente } from './cliente.model';
import { Plan } from 'src/app/models/plan.model';
import { File } from "./file.model";

export class Solicitud {

  estadoSolicitud: string;
    observaciones: string;
    respuesta: string;
    ssptCliente: Cliente;
    ssptPlan: Plan;
    file: File;


  }
