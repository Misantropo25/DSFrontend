import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { AdministradorEmpleadoService } from 'src/app/service/administradorEmpleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: string = "";
  empleado: Empleado = {
      id: 0,
      dni: '',
      apePaterno: '',
      apeMaterno: '',
      contrasenia: '',
      direccion: '',
      email: '',
      nacionalidad: '',
      nomUsuario: '',
      nombre:'',
      numTelefono: '',
      sexo:'',
      tipDocIdentificacion: '',
      area: '',
    }

  constructor(private _route: ActivatedRoute, private empleadoService: AdministradorEmpleadoService) { 
    this.empleadoService.listarEmpleado();
      console.log(this._route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
      if(id != null){
        this.id = id;
      }
      if(id!=null){
        this.empleadoService.listarEmpleadoPorId(parseInt(id)).subscribe((data: Empleado) => {
          this.empleado = data
          console.log(this.empleado)
        });
      }
  }

  
}

