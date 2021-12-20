import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { EmpleadosMantenimientoComponent } from './empleados-mantenimiento/empleados-mantenimiento.component';
import { ClientesMantenimientoComponent } from './clientes-mantenimiento/clientes-mantenimiento.component';
import { ContratosMantenimientoComponent } from './contratos-mantenimiento/contratos-mantenimiento.component';
import { PagosMantenimientoComponent } from './pagos-mantenimiento/pagos-mantenimiento.component';
import { TicketsMantenimientoComponent } from './tickets-mantenimiento/tickets-mantenimiento.component';
import { ServiciosMantenimientoComponent } from './servicios-mantenimiento/servicios-mantenimiento.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ClientesMantenimientoNuevoClienteComponent } from './clientes-mantenimiento-nuevo-cliente/clientes-mantenimiento-nuevo-cliente.component';
import { ClientesMantenimientoEditarClienteComponent } from './clientes-mantenimiento-editar-cliente/clientes-mantenimiento-editar-cliente.component';
import { ClientesMantenimientoVisualizarClienteComponent } from './clientes-mantenimiento-visualizar-cliente/clientes-mantenimiento-visualizar-cliente.component';
import { EmpleadoMantenimientoEditarEmpleadoComponent } from './empleado-mantenimiento-editar-empleado/empleado-mantenimiento-editar-empleado.component';
import { EmpleadoMantenimientoNuevoEmpleadoComponent } from './empleado-mantenimiento-nuevo-empleado/empleado-mantenimiento-nuevo-empleado.component';
import { EmpleadoMantenimientoVisualizarEmpleadoComponent } from './empleado-mantenimiento-visualizar-empleado/empleado-mantenimiento-visualizar-empleado.component';
import { ContratoMantenimientoVisualizarContratoComponent } from './contrato-mantenimiento-visualizar-contrato/contrato-mantenimiento-visualizar-contrato.component';
import { ContratoMantenimientoEditarContratoComponent } from './contrato-mantenimiento-editar-contrato/contrato-mantenimiento-editar-contrato.component';
import { ContratoMantenimientoNuevoContratoComponent } from './contrato-mantenimiento-nuevo-contrato/contrato-mantenimiento-nuevo-contrato.component';
import { ServicioMantenimientoNuevoServicioComponent } from './servicio-mantenimiento-nuevo-servicio/servicio-mantenimiento-nuevo-servicio.component';
import { ServicioMantenimientoEditarServicioComponent } from './servicio-mantenimiento-editar-servicio/servicio-mantenimiento-editar-servicio.component';
import { ServicioMantenimientoVisualizarServicioComponent } from './servicio-mantenimiento-visualizar-servicio/servicio-mantenimiento-visualizar-servicio.component';
import { PagoMantenimientoVisualizarPagoComponent } from './pago-mantenimiento-visualizar-pago/pago-mantenimiento-visualizar-pago.component';
import { PagoMantenimientoEditarPagoComponent } from './pago-mantenimiento-editar-pago/pago-mantenimiento-editar-pago.component';
import { PagoMantenimientoNuevoPagoComponent } from './pago-mantenimiento-nuevo-pago/pago-mantenimiento-nuevo-pago.component';
import { TicketMantenimientoNuevoTicketComponent } from './ticket-mantenimiento-nuevo-ticket/ticket-mantenimiento-nuevo-ticket.component';
import { TicketMantenimientoEditarTicketComponent } from './ticket-mantenimiento-editar-ticket/ticket-mantenimiento-editar-ticket.component';
import { TicketMantenimientoVisualizarTicketComponent } from './ticket-mantenimiento-visualizar-ticket/ticket-mantenimiento-visualizar-ticket.component';
import { RespuestasMantenimientoComponent } from './respuestas-mantenimiento/respuestas-mantenimiento.component';
import { RespuestaMantenimientoEditarRespuestaComponent } from './respuesta-mantenimiento-editar-respuesta/respuesta-mantenimiento-editar-respuesta.component';
import { RespuestaMantenimientoVisualizarRespuestaComponent } from './respuesta-mantenimiento-visualizar-respuesta/respuesta-mantenimiento-visualizar-respuesta.component';
import { RespuestaMantenimientoNuevaRespuestaComponent } from './respuesta-mantenimiento-nueva-respuesta/respuesta-mantenimiento-nueva-respuesta.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    InicioComponent,
    FooterComponent,
    EmpleadosMantenimientoComponent,
    ClientesMantenimientoComponent,
    ContratosMantenimientoComponent,
    PagosMantenimientoComponent,
    TicketsMantenimientoComponent,
    ServiciosMantenimientoComponent,
    ClientesMantenimientoNuevoClienteComponent,
    ClientesMantenimientoEditarClienteComponent,
    ClientesMantenimientoVisualizarClienteComponent,
    EmpleadoMantenimientoEditarEmpleadoComponent,
    EmpleadoMantenimientoNuevoEmpleadoComponent,
    EmpleadoMantenimientoVisualizarEmpleadoComponent,
    ContratoMantenimientoVisualizarContratoComponent,
    ContratoMantenimientoEditarContratoComponent,
    ContratoMantenimientoNuevoContratoComponent,
    ServicioMantenimientoNuevoServicioComponent,
    ServicioMantenimientoEditarServicioComponent,
    ServicioMantenimientoVisualizarServicioComponent,
    PagoMantenimientoVisualizarPagoComponent,
    PagoMantenimientoEditarPagoComponent,
    PagoMantenimientoNuevoPagoComponent,
    TicketMantenimientoNuevoTicketComponent,
    TicketMantenimientoEditarTicketComponent,
    TicketMantenimientoVisualizarTicketComponent,
    RespuestasMantenimientoComponent,
    RespuestaMantenimientoEditarRespuestaComponent,
    RespuestaMantenimientoVisualizarRespuestaComponent,
    RespuestaMantenimientoNuevaRespuestaComponent,
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap:  [AdministradorModule]
})
export class AdministradorModule {}