import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../interfaces/pago.interface';



@Injectable({
    providedIn: 'root'
  })


export class AdministradorPagoService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Pago[] = [];


    listarPagos() {
        this.http.get<Pago[]>('http://127.0.0.1:8091//api/pago').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarPagoPorId(idPago: number): Observable<Pago>{
        return this.http.get<Pago>('http://127.0.0.1:8091//api/pago/' +idPago);
    }

    agregarPago(pago: Pago){
        this.http.post<any>('http://127.0.0.1:8091//api/pago', pago).subscribe();
    } 

    eliminarPago(idPago:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/pago/'+ idPago).subscribe();
    }

    editarPago(idPago:number, pagoModificado: Pago){
        this.http.put<Pago[]>('http://127.0.0.1:8091//api/pago/'+ idPago,pagoModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }






}
