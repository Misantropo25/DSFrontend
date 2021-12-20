import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { AdministradorTicketService } from 'src/app/service/administradorTicket.service';

@Component({
  selector: 'app-ticket-mantenimiento-nuevo-ticket',
  templateUrl: './ticket-mantenimiento-nuevo-ticket.component.html',
  styleUrls: ['./ticket-mantenimiento-nuevo-ticket.component.scss']
})
export class TicketMantenimientoNuevoTicketComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: '',
    direccion: '',
    email: '',
    nacionalidad: '',
    nomUsuario: '',
    nombre: '',
    numTelefono: '',
    sexo: '',
    tipDocIdentificacion: '',
    clienteSolicito: [],
    correspondeCliente: []
  }
  constructor(private ticketService: AdministradorTicketService) { }

  ngOnInit(): void {
  }

  crearTicket(descripcionTicket: string, tipoDeSolicitud: string){
    const nuevoTicket: Ticket = {
      id: 0,
      descripcionTicket: descripcionTicket,
      estadoTicket: true,
      fecCreacion: new Date,
      fecFinalizacion: new Date,
      tipoDeSolicitud: tipoDeSolicitud,
      clienteSolicito: this.cliente
    };
    this.ticketService.agregarTicket(nuevoTicket);
  }  

}
