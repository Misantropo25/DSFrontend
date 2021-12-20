import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { ReclamosModule } from './reclamos/reclamos.module';
import { ContratosModule } from './contratos/contratos.module';
import { RegistrosModule } from './registros/registros.module';
import { TicketsModule } from './tickets/tickets.module';
import { ServiciosModule } from './servicios/servicios.module';
import { AppRoutingModule } from './app-routing.module';
import { AdministradorModule } from './administrador/administrador.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    ReclamosModule,
    ContratosModule,
    RegistrosModule,
    TicketsModule,
    ServiciosModule,
    AdministradorModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
