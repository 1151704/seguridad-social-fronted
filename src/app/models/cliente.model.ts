import { TipoIdentificacion } from './tipo-identificacion.model';
import { Usuario } from './usuario.model';
import { ActividadEconomica } from './actividad-economica.model';
import { Plan } from 'src/app/models/plan.model';
import { Municipio } from './municipio.model';
import { TipoCliente } from './tipo-cliente.model';

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
    profesion: string;
    dv: string;
    ibc: number;
    lugarExpedicion: string;
    fechaNacimiento: string;
    fechaExpedicion: string;
    tipoIdentificacion: TipoIdentificacion;
    municipio: Municipio;
    tipoCliente: TipoCliente;
    actividad: ActividadEconomica;
    asesor: Usuario;
    plan: Plan;
    soportes: any;

}
