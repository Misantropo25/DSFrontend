import { Contrato } from "./contrato.interface";
import { Servicio } from "./servicio.interface";
import { Ticket } from './ticket.interface';


export interface Cliente{
    id: number;
    dni: string;
    apePaterno: string;
    apeMaterno: string;
    contrasenia: string;
    direccion: string;
    email: string;
    nacionalidad: string;
    nomUsuario: string;
    nombre:string;
    numTelefono: string;
    sexo:string;
    tipDocIdentificacion: string;
    clienteSolicito: Ticket[];
    correspondeCliente: Contrato[];
}