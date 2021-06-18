import { Usuario } from './usuario.model';
import { Cliente } from './cliente.model';
import { Plan } from 'src/app/models/plan.model';

export class Solicitud {

    id: number;
    estadoSolicitud: string;
    observaciones: string;
    respuesta: string;
    ssptCliente: Cliente;
    ssptUsuario: Usuario;
    ssptPlan: Plan;
    fechaRegistro: string;
    fechaRespuesta : string;
    soportes: any[];

  }
