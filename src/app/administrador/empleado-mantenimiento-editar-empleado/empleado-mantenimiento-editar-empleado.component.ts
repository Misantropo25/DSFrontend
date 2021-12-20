import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorEmpleadoService } from 'src/app/service/administradorEmpleado.service';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-empleado-mantenimiento-editar-empleado',
  templateUrl: './empleado-mantenimiento-editar-empleado.component.html',
  styleUrls: ['./empleado-mantenimiento-editar-empleado.component.scss']
})
export class EmpleadoMantenimientoEditarEmpleadoComponent implements OnInit {

  empleado: Empleado = {
    id: 0,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    area: '',
    contrasenia: '',
    direccion: '',
    email: '',
    nacionalidad: '',
    nomUsuario: '',
    nombre: '',
    numTelefono: '',
    sexo: '',
    tipDocIdentificacion: ''
  }

  constructor(private empleadoService: AdministradorEmpleadoService, private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.empleadoService.listarEmpleadoPorId(parseInt(id)).subscribe((data: Empleado) => {
        this.empleado = data
      });
    }
  }

  editarEmpleado(id:string,dni:string, apePaterno:string, apeMaterno:string, sexo:string, tipDocIdentificacion:string, email:string,numTelefono:string,nacionalidad:string,direccion:string,nomUsuario:string,nombre:string,contrasenia:string,area:string): void{
    const empleadoModificado: Empleado = {
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
      area: area
    };
    this.empleadoService.editarEmpleado(parseInt(id),empleadoModificado);
  }

}
