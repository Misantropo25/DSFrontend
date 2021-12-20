import { Component, OnInit } from '@angular/core';
import { AdministradorEmpleadoService } from '../../service/administradorEmpleado.service';

@Component({
  selector: 'app-empleados-mantenimiento',
  templateUrl: './empleados-mantenimiento.component.html',
  styleUrls: ['./empleados-mantenimiento.component.scss']
})
export class EmpleadosMantenimientoComponent implements OnInit {
  
  constructor(private empleadoService: AdministradorEmpleadoService) {
    this.empleadoService.listarEmpleado();
   }

  ngOnInit(): void {
  }

  get lista() {
    return this.empleadoService.lista;
  }

  eliminarEmpleado(idEmpleado:number) {
    this.empleadoService.eliminarEmpleado(idEmpleado);
  }
}
