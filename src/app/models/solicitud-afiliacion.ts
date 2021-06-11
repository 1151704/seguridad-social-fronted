import { Cliente } from './cliente.model';
import { Plan } from 'src/app/models/plan.model';

export class Solicitud {

    id: number;
    estadoSolicitud: string;
    observaciones: string;
    respuesta: string;
    ssptCliente: Cliente;
    ssptPlan: Plan;
    soportes: any;

  }
