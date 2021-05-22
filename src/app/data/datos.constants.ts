import { Rol } from '../models/rol.model';

export const TIPOS_DOCUMENTOS = [
  { value: 'CC', label: 'Cédula de ciudadanía' },
  { value: 'TI', label: 'Tarjeta de identidad' },
  { value: 'RC', label: 'Registro civil' },
  { value: 'CE', label: 'Cédula de extranjería' },
  { value: 'PA', label: 'Pasaporte' },
  { value: 'NV', label: 'Certificado de nacido vivo' },
  { value: 'CD', label: 'Carné diplomático' },
  { value: 'SC', label: 'Salvo conducto de permanencia' },
  { value: 'PR', label: 'Pasaporte de la ONU' },
  { value: 'PE', label: 'Permiso Especial de Permanencia' },
  { value: 'NI', label: 'NIT' },
  { value: 'AS', label: 'Adulto sin Identificación' },
  { value: 'MS', label: 'Menor sin Identificación' }
]

export const ROLES: Rol[] = [
  new Rol('ROLE_ADMIN', 'Administrador'),
  new Rol('ROLE_USER', 'Asesor'),
]

export enum TipoPlan {
	FIJO, FLEXIBLE
}

export enum TipoAccion {
  PROGRAMACION, ENTREGA, REPORTEENTREGA
}

export enum Mes {
  ENERO, FEBRERO, MARZO, ABRIL, MAYO, JUNIO, JULIO, AGOSTO, SEPTIEMBRE, OCTUBRE, NOVIEMBRE, DICIEMBRE
}
