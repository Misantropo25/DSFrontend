import { Component, OnInit } from '@angular/core';
import { AdministradorEmpleadoService } from 'src/app/service/administradorEmpleado.service';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-empleado-mantenimiento-nuevo-empleado',
  templateUrl: './empleado-mantenimiento-nuevo-empleado.component.html',
  styleUrls: ['./empleado-mantenimiento-nuevo-empleado.component.scss']
})
export class EmpleadoMantenimientoNuevoEmpleadoComponent implements OnInit {

  constructor(private empleadoService: AdministradorEmpleadoService) { }

  ngOnInit(): void {
  }

  crearEmpleado(dni:string, apePaterno:string, apeMaterno:string, sexo:string, tipDocIdentificacion:string, email:string,numTelefono:string,nacionalidad:string,direccion:string,nomUsuario:string,nombre:string,contrasenia:string,area:string){
    const nuevoEmpleado: Empleado = {
      id: 0,
      dni: dni,
      apePaterno: apePaterno,
      apeMaterno: apeMaterno,
      sexo: sexo,
      tipDocIdentificacion: tipDocIdentificacion,
      email: email,
      numTelefono: numTelefono,
      nacionalidad: nacionalidad,
      direccion: direccion,
      nomUsuario: nomUsuario,
      nombre: nombre,
      contrasenia: contrasenia,
      area: area,
    };
    this.empleadoService.agregarEmpleado(nuevoEmpleado);
  }   
}
