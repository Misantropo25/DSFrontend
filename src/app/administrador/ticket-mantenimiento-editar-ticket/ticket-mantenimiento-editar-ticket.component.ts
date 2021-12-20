import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorTicketService } from 'src/app/service/administradorTicket.service';
import { Ticket } from '../../interfaces/ticket.interface';

@Component({
  selector: 'app-ticket-mantenimiento-editar-ticket',
  templateUrl: './ticket-mantenimiento-editar-ticket.component.html',
  styleUrls: ['./ticket-mantenimiento-editar-ticket.component.scss']
})
export class TicketMantenimientoEditarTicketComponent implements OnInit {
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

  ticket: Ticket ={
    id: 0,
    descripcionTicket: '',
    estadoTicket: true,
    fecCreacion: new Date,
    fecFinalizacion: new Date,
    tipoDeSolicitud: '',
    clienteSolicito: this.cliente
  }

  constructor(private ticketService: AdministradorTicketService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.ticketService.listarTicketPorId(parseInt(id)).subscribe((data: Ticket) => {
        this.ticket = data
      });
    }
  }

  editarTicket(idTicket:string,estadoTicket:string, descripcionTicket: string, tipoDeSolicitud: string, fecFinalizacion:string){
    const nuevoTicket: Ticket = {
      id: 0,
      descripcionTicket: descripcionTicket,
      estadoTicket: Boolean(estadoTicket),
      fecCreacion: new Date,
      fecFinalizacion: new Date(fecFinalizacion),
      tipoDeSolicitud: tipoDeSolicitud,
      clienteSolicito: this.cliente
    };
    this.ticketService.editarTicket(parseInt(idTicket),nuevoTicket);
  }  

}
