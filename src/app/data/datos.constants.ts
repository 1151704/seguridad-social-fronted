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
  new Rol('ROLE_EPS','Eps'),
  new Rol('ROLE_USER','Usuario'),
  new Rol('ROLE_FINZ','Financiero'),
  new Rol('ROLE_CONS','Consultas'),
]

export const COMPARADOR_FACTURACION = [
  { value: '1', label: 'Comparador Administrativo' },
  { value: '2', label: 'Homólogo' },
  { value: '3', label: 'No aplica' }
];

export const UNIDAD_CONCENTRACION_COMPARADOR = [
  {value: '0072', label: 'UI'},
  {value: '0137', label: 'mcg'},
  {value: '0168', label: 'mg'},
  {value: '0187', label: 'MUI'},
]

export const TIPOS_TECNOLOGIA = [
  { value: 'S', label: 'Servicios complementarios' },
  { value: 'M', label: 'Medicamentos' },
  { value: 'P', label: 'Procedimientos' },
  { value: 'N', label: 'Productos nutricionales' },
  { value: 'D', label: 'Dispositivos medicos' }
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
