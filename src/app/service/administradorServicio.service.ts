import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../interfaces/servicio.interface';


@Injectable({
    providedIn: 'root'
  })


export class AdministradorServicioService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Servicio[] = [];


    listarServicios() {
        this.http.get<Servicio[]>('http://127.0.0.1:8091//api/servicio').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarServicioPorId(idServicio: number): Observable<Servicio>{
        return this.http.get<Servicio>('http://127.0.0.1:8091//api/servicio/' +idServicio);
    }

    agregarServicio(servicio: Servicio){
        this.http.post<any>('http://127.0.0.1:8091//api/servicio', servicio).subscribe();
    } 

    eliminarServicio(idServicio:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/servicio/'+ idServicio).subscribe();
    }

    editarServicio(idServicio:number, servicioModificado: Servicio){
        this.http.put<Servicio[]>('http://127.0.0.1:8091//api/servicio/'+ idServicio,servicioModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }






}
