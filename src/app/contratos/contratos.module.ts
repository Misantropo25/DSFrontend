import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContratoMantenimientoComponent } from './contrato-mantenimiento/contrato-mantenimiento.component';
import { ContratoVisualizacionComponent } from './contrato-visualizacion/contrato-visualizacion.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AppRoutingModule } from '../app-routing.module';
import { ContratoVisualizarComponent } from './contrato-visualizar/contrato-visualizar.component';


@NgModule({
  declarations: [
    ContratoMantenimientoComponent,
    ContratoVisualizacionComponent,
    ContratoVisualizarComponent
  ],
  exports:[
    ContratoMantenimientoComponent,
    ContratoVisualizacionComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    UsuariosModule,
    AppRoutingModule
  ]
})
export class ContratosModule { }
