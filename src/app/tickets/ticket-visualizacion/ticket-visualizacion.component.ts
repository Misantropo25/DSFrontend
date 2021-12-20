import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { AdministradorTicketService } from 'src/app/service/administradorTicket.service';

@Component({
  selector: 'app-ticket-visualizacion',
  templateUrl: './ticket-visualizacion.component.html',
  styleUrls: ['./ticket-visualizacion.component.css']
})
export class TicketVisualizacionComponent implements OnInit {
  
  id: string = "";

  unicos:Ticket[] = [];

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

  listaTickets: Ticket[] = [];

  constructor(private _route: ActivatedRoute, private clienteService: AdministradorClienteService, private ticketService: AdministradorTicketService) { 
    this.clienteService.listarCliente(); 
    this.ticketService.listarTickets();
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id != null){
      this.id = id;
    }
    if(id!=null){
      this.clienteService.listarClientePorId(parseInt(id)).subscribe((data: Cliente) => {
        this.cliente = data
      });
    }
    
    
  }

  get lista() {
    return this.clienteService.lista;
  }

  get listaDeTickets() {
    for (let tickets of this.cliente.clienteSolicito){
      console.log(tickets);
      this.listaTickets.push(tickets); 
    }
    this.listaTickets.forEach((item)=>{
    	//pushes only unique element
        if(!this.unicos.includes(item)){
          this.unicos.push(item);
    	}
    })
    
    return this.unicos;
    
  }

  
  estadoTicket(palabra:Boolean): String{
    if(palabra){
      return "Ticket sin responder";
    }
    return "Ticket respondido";
  }
}
