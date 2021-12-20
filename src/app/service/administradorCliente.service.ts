import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


export class AdministradorClienteService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Cliente[] = [];

    public listaUsuarios:Array<string>[] = [];
    public Usuarios: [NomUsuario:string,contrasenia:string] = [" ",""];


    // public clientePorId: Cliente[] = [];

    listarCliente() {
        this.http.get<Cliente[]>('http://127.0.0.1:8091//api/cliente').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarClientePorId(idCliente: number): Observable<Cliente>{
        return this.http.get<Cliente>('http://127.0.0.1:8091//api/cliente/' +idCliente);
    }

    agregarCliente(cliente: Cliente){
        this.http.post<any>('http://127.0.0.1:8091//api/cliente', cliente).subscribe();
    } 

    eliminarCliente(idCliente:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/cliente/'+ idCliente).subscribe();
    }

    editarCliente(idCliente:number, clienteModificado: Cliente){
        this.http.put<Cliente[]>('http://127.0.0.1:8091//api/cliente/'+ idCliente,clienteModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    cargarClientes() {
        return this.http.get('http://127.0.0.1:8091//api/cliente');
    }
    



}



