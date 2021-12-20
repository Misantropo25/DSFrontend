import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorServicioService } from 'src/app/service/administradorServicio.service';
import { Servicio } from '../../interfaces/servicio.interface';

@Component({
  selector: 'app-servicio-mantenimiento-editar-servicio',
  templateUrl: './servicio-mantenimiento-editar-servicio.component.html',
  styleUrls: ['./servicio-mantenimiento-editar-servicio.component.scss']
})
export class ServicioMantenimientoEditarServicioComponent implements OnInit {

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
        this.servicio = data
      });
    }
  }

  editarServicio(id:string,costoServicio:string, descripcion:string, estadoServicio:string, nombreServicio:string, fecExpiracion:string): void{
    const servicioModificado: Servicio = {
      id: 0,
      costoServicio: parseInt(costoServicio),
      descripcion: descripcion,
      estadoServicio: (/estadoServicio/i).test("true"),
      nombreServicio: nombreServicio,
      fecCreacion: new Date,
      fecExpiracion: new Date(fecExpiracion)
    };
    this.servicioService.editarServicio(parseInt(id),servicioModificado);
  }


}
