import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Respuesta } from 'src/app/interfaces/respuesta.interface';
import { AdministradorRespuestaService } from 'src/app/service/administradorRespuesta.service';

@Component({
  selector: 'app-respuesta-mantenimiento-visualizar-respuesta',
  templateUrl: './respuesta-mantenimiento-visualizar-respuesta.component.html',
  styleUrls: ['./respuesta-mantenimiento-visualizar-respuesta.component.scss']
})
export class RespuestaMantenimientoVisualizarRespuestaComponent implements OnInit {

  respuesta: Respuesta = {
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

}
