import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado.interface';


@Injectable({
    providedIn: 'root'
  })


export class AdministradorEmpleadoService {
    constructor(private http: HttpClient) {
    }
    
    public lista: Empleado[] = [];


    listarEmpleado() {
        this.http.get<Empleado[]>('http://127.0.0.1:8091//api/empleado/').subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    listarEmpleadoPorId(idEmpleado: number): Observable<Empleado>{
        return this.http.get<Empleado>('http://127.0.0.1:8091//api/empleado/' +idEmpleado);
    }

    agregarEmpleado(empleado: Empleado){
        this.http.post<any>('http://127.0.0.1:8091//api/empleado', empleado).subscribe();
    } 

    eliminarEmpleado(idEmpleado:number){
        this.http.delete<any>('http://127.0.0.1:8091//api/empleado/'+ idEmpleado).subscribe();
    }

    editarEmpleado(idEmpleado:number, empleadoModificado: Empleado){
        this.http.put<Empleado[]>('http://127.0.0.1:8091//api/empleado/'+ idEmpleado,empleadoModificado).subscribe((resp: any) => {
            console.log(resp);
            this.lista = resp;
        });
    }

    cargarEmpleados() {
        return this.http.get('http://127.0.0.1:8091//api/empleado');
    }




}



