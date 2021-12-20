import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { AdministradorTicketService } from 'src/app/service/administradorTicket.service';

@Component({
  selector: 'app-ticket-solicitud',
  templateUrl: './ticket-solicitud.component.html',
  styleUrls: ['./ticket-solicitud.component.css']
})
export class TicketSolicitudComponent implements OnInit {
  id:string = "";
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

  ticket: Ticket = {
    id: 0,
    descripcionTicket: '',
    estadoTicket: true,
    fecCreacion: new Date,
    fecFinalizacion: new Date,
    tipoDeSolicitud: '',
    clienteSolicito: this.cliente
  }
  
  constructor(private _route: ActivatedRoute, private ticketService: AdministradorTicketService) { 
    this.ticketService.listarTickets(); 
  }

  ngOnInit(): void {
    
    const id = this._route.snapshot.paramMap.get('id');
    if(id != null){
      this.id = id;
    }
  }
  solicitarTicket(idCliente:string, descripcionTicket: string, tipoDeSolicitud: string){
    this.cliente.id = parseInt(idCliente);
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
