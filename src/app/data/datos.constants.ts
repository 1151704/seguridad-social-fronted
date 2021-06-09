import { Rol } from '../models/rol.model';

export const TIPOS_DOCUMENTOS = [
  { id: 3, value: 'CC', label: 'Cédula de ciudadanía' },
  { id: 2, value: 'TI', label: 'Tarjeta de identidad' },
  { id: 1, value: 'RC', label: 'Registro civil' },
  { id: 4, value: 'CE', label: 'Cédula de extranjería' },
  { id: 5, value: 'PA', label: 'Pasaporte' },
  { id: 6, value: 'NV', label: 'Certificado de nacido vivo' },
  { id: 7, value: 'CD', label: 'Carné diplomático' },
  { id: 8, value: 'SC', label: 'Salvo conducto de permanencia' },
  { id: 9, value: 'PR', label: 'Pasaporte de la ONU' },
  { id: 10, value: 'PE', label: 'Permiso Especial de Permanencia' },
  { id: 11, value: 'NI', label: 'NIT' },
  { id: 12, value: 'AS', label: 'Adulto sin Identificación' },
  { id: 13, value: 'MS', label: 'Menor sin Identificación' }
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
