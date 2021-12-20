import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket.interface';


@Injectable({
    providedIn: 'root'
  })


export class AdministradorTicketService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Ticket[] = [];


    listarTickets() {
        this.http.get<Ticket[]>('http://127.0.0.1:8091//api/ticket').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarTicketPorId(idTicket: number): Observable<Ticket>{
        return this.http.get<Ticket>('http://127.0.0.1:8091//api/ticket/' +idTicket);
    }

    agregarTicket(ticket: Ticket){
        this.http.post<any>('http://127.0.0.1:8091//api/ticket', ticket).subscribe();
    } 

    eliminarTicket(idTicket:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/ticket/'+ idTicket).subscribe();
    }

    editarTicket(idTicket:number, ticketModificado: Ticket){
        this.http.put<Ticket[]>('http://127.0.0.1:8091//api/ticket/'+ idTicket,ticketModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }






}
