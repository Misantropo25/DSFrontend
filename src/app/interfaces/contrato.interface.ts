import { Cliente } from "./cliente.interface";
import { Servicio } from "./servicio.interface";

export interface Contrato{
    id: number;
    descripcion: string;
    direccion: string;
    distritoDireccion: string;
    estadoContrato: Boolean;
    fecCreacion: Date;
    fecFinalizacion: Date;
    modDePago: string;
    refDireccion: string;
    restricciones: string;
    tasaDeMora: number;
    correspondeCliente: Cliente;
    tieneServicio: Servicio;
}