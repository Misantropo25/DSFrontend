import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamoMantenimientoComponent } from './reclamo-mantenimiento/reclamo-mantenimiento.component';
import { ReclamoIngresoComponent } from './reclamo-ingreso/reclamo-ingreso.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReclamoMantenimientoComponent,
    ReclamoIngresoComponent
  ],
  exports:[
    ReclamoMantenimientoComponent,
    ReclamoIngresoComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ReclamosModule { }
