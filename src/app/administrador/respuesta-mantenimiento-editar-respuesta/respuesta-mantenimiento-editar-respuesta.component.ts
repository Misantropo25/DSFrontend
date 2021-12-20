import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorRespuestaService } from 'src/app/service/administradorRespuesta.service';
import { Respuesta } from '../../interfaces/respuesta.interface';

@Component({
  selector: 'app-respuesta-mantenimiento-editar-respuesta',
  templateUrl: './respuesta-mantenimiento-editar-respuesta.component.html',
  styleUrls: ['./respuesta-mantenimiento-editar-respuesta.component.scss']
})
export class RespuestaMantenimientoEditarRespuestaComponent implements OnInit {

  respuesta: Respuesta= {
    id: 0,
    contenido: '',
    empleadoRespondio: 0,
    ticketRespondio: 0
  }

  constructor(private respuestaService: AdministradorRespuestaService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.respuestaService.listarRespuestaPorId(parseInt(id)).subscribe((data: Respuesta) => {
        this.respuesta = data
      });
    }
  }

  editarRespuesta(idRespuesta:string,contenido:string)
  {
    const nuevaRespuesta: Respuesta = {
      id: 0,
      contenido: contenido,
      empleadoRespondio: 0,
      ticketRespondio: 0
    };
    this.respuestaService.editarRespuesta(parseInt(idRespuesta),nuevaRespuesta);
  }

}
