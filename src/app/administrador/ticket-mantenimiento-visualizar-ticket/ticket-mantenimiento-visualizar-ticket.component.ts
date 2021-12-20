import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorTicketService } from 'src/app/service/administradorTicket.service';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { Cliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'app-ticket-mantenimiento-visualizar-ticket',
  templateUrl: './ticket-mantenimiento-visualizar-ticket.component.html',
  styleUrls: ['./ticket-mantenimiento-visualizar-ticket.component.scss']
})
export class TicketMantenimientoVisualizarTicketComponent implements OnInit {
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
  
}
