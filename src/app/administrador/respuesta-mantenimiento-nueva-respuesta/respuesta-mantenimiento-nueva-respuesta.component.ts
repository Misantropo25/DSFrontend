import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/interfaces/respuesta.interface';
import { AdministradorRespuestaService } from 'src/app/service/administradorRespuesta.service';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-respuesta-mantenimiento-nueva-respuesta',
  templateUrl: './respuesta-mantenimiento-nueva-respuesta.component.html',
  styleUrls: ['./respuesta-mantenimiento-nueva-respuesta.component.scss']
})
export class RespuestaMantenimientoNuevaRespuestaComponent implements OnInit {

  constructor(private respuestaService: AdministradorRespuestaService) { }

  ngOnInit(): void {
  }

  crearRespuesta(contenido:string,empledoRespondio:string,ticketRespondio:string)
  {
    const nuevaRespuesta: Respuesta = {
      id: 0,
      contenido: contenido,
      empleadoRespondio: parseInt(empledoRespondio),
      ticketRespondio: parseInt(ticketRespondio)
    };
    this.respuestaService.agregarRespuesta(nuevaRespuesta);
  }  

}
