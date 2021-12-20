import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-compra-planes-envio-datos',
  templateUrl: './servicio-compra-planes-envio-datos.component.html',
  styleUrls: ['./servicio-compra-planes-envio-datos.component.css']
})
export class ServicioCompraPlanesEnvioDatosComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
