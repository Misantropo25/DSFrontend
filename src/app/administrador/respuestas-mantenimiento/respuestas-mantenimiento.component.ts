import { Component, OnInit } from '@angular/core';
import { AdministradorRespuestaService } from 'src/app/service/administradorRespuesta.service';

@Component({
  selector: 'app-respuestas-mantenimiento',
  templateUrl: './respuestas-mantenimiento.component.html',
  styleUrls: ['./respuestas-mantenimiento.component.scss']
})
export class RespuestasMantenimientoComponent implements OnInit {

  constructor(private respuestaService: AdministradorRespuestaService) { }

  ngOnInit(): void {
    this.respuestaService.listarRespuesta();
  }

  get lista() {
    return this.respuestaService.lista;
  }

  eliminarRespuesta(idRespuesta:number) {
    this.respuestaService.eliminarRespuesta(idRespuesta);
  }

}
