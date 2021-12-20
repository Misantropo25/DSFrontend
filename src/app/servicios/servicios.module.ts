import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMantenimientoPlanesComponent } from './servicio-mantenimiento-planes/servicio-mantenimiento-planes.component';
import { ServicioMantenimientoPlanesDescripcionComponent } from './servicio-mantenimiento-planes-descripcion/servicio-mantenimiento-planes-descripcion.component';
import { ServicioCompraPlanesComponent } from './servicio-compra-planes/servicio-compra-planes.component';
import { ServicioCompraPlanesEnvioDatosComponent } from './servicio-compra-planes-envio-datos/servicio-compra-planes-envio-datos.component';
import { FormsModule } from '@angular/forms';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ServicioMantenimientoPlanesComponent,
    ServicioMantenimientoPlanesDescripcionComponent,
    ServicioCompraPlanesComponent,
    ServicioCompraPlanesEnvioDatosComponent
  ],
  exports:[
    ServicioMantenimientoPlanesComponent,
    ServicioMantenimientoPlanesDescripcionComponent,
    ServicioCompraPlanesComponent,
    ServicioCompraPlanesEnvioDatosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosModule,
    AppRoutingModule
  ]
})
export class ServiciosModule { }
