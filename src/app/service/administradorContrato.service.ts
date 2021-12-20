import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../interfaces/contrato.interface';





@Injectable({
    providedIn: 'root'
  })


export class AdministradorContratoService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Contrato[] = [];

    listarContrato() {
        this.http.get<Contrato[]>('http://127.0.0.1:8091//api/contrato').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarContratoPorId(idContrato: number): Observable<Contrato>{
        return this.http.get<Contrato>('http://127.0.0.1:8091//api/contrato/' +idContrato);
    }

    agregarContrato(contrato: Contrato){
        this.http.post<any>('http://127.0.0.1:8091//api/contrato/', contrato).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    } 

    eliminarContrato(idContrato:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/contrato/'+ idContrato).subscribe();
    }

    editarContrato(idContrato:number, contratoModificado: Contrato){
        this.http.put<Contrato[]>('http://127.0.0.1:8091//api/contrato/'+ idContrato,contratoModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }


}
