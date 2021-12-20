import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorServicioService } from 'src/app/service/administradorServicio.service';

@Component({
  selector: 'app-servicio-mantenimiento-visualizar-servicio',
  templateUrl: './servicio-mantenimiento-visualizar-servicio.component.html',
  styleUrls: ['./servicio-mantenimiento-visualizar-servicio.component.scss']
})
export class ServicioMantenimientoVisualizarServicioComponent implements OnInit {

  servicio: Servicio = {
    id: 0,
    costoServicio: 0,
    descripcion: '',
    estadoServicio: true,
    fecCreacion: new Date,
    fecExpiracion: new Date,
    nombreServicio: ''
  }

  constructor(private servicioService: AdministradorServicioService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.servicioService.listarServicioPorId(parseInt(id)).subscribe((data: Servicio) => {
        this.servicio = data;
      });
    }
  }

}
