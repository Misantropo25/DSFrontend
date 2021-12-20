import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-compra-planes',
  templateUrl: './servicio-compra-planes.component.html',
  styleUrls: ['./servicio-compra-planes.component.css']
})
export class ServicioCompraPlanesComponent implements OnInit {

  constructor( private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
