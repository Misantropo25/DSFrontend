import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/respuesta.interface';


@Injectable({
    providedIn: 'root'
  })


export class AdministradorRespuestaService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Respuesta[] = [];


    listarRespuesta() {
        this.http.get<Respuesta[]>('http://127.0.0.1:8091//api/respuesta').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarRespuestaPorId(idRespuesta: number): Observable<Respuesta>{
        return this.http.get<Respuesta>('http://127.0.0.1:8091//api/respuesta/' +idRespuesta);
    }

    agregarRespuesta(respuesta: Respuesta){
        this.http.post<any>('http://127.0.0.1:8091//api/respuesta', respuesta).subscribe();
    } 

    eliminarRespuesta(idRespuesta:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/respuesta/'+ idRespuesta).subscribe();
    }

    editarRespuesta(idRespuesta:number, respuestaModificado: Respuesta){
        this.http.put<Respuesta[]>('http://127.0.0.1:8091//api/respuesta/'+ idRespuesta,respuestaModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }






}
