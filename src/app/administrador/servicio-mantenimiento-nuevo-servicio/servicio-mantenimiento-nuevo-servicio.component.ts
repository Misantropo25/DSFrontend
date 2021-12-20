import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorServicioService } from 'src/app/service/administradorServicio.service';
import { ServicioCompraPlanesComponent } from '../../servicios/servicio-compra-planes/servicio-compra-planes.component';

@Component({
  selector: 'app-servicio-mantenimiento-nuevo-servicio',
  templateUrl: './servicio-mantenimiento-nuevo-servicio.component.html',
  styleUrls: ['./servicio-mantenimiento-nuevo-servicio.component.scss']
})
export class ServicioMantenimientoNuevoServicioComponent implements OnInit {

  constructor(private servicioService: AdministradorServicioService) { }

  ngOnInit(): void {
  }

  crearServicio(costoServicio:string, descripcion:string, nombreServicio:string)
  {
    const nuevoServicio: Servicio = {
      id: 0,
      costoServicio: parseInt(costoServicio),
      descripcion: descripcion,
      estadoServicio: (/"estadoServicio"/i).test("true"),
      nombreServicio: nombreServicio,
      fecCreacion: new Date,
      fecExpiracion: new Date
    };
    this.servicioService.agregarServicio(nuevoServicio);
  }   
}
