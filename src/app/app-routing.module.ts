import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioInicioComponent } from './usuarios/usuario-inicio/usuario-inicio.component';
import { UsuarioNosotrosComponent } from './usuarios/usuario-nosotros/usuario-nosotros.component';
import { UsuarioPlanesComponent } from './usuarios/usuario-planes/usuario-planes.component';
import { UsuarioContactoComponent } from './usuarios/usuario-contacto/usuario-contacto.component';
import { UsuarioAyudaSoporteComponent } from './usuarios/usuario-ayuda-soporte/usuario-ayuda-soporte.component';
import { UsuarioLoginComponent } from './usuarios/usuario-login/usuario-login.component';
import { UsuarioRegisterComponent } from './usuarios/usuario-register/usuario-register.component';
import { ServicioCompraPlanesComponent } from './servicios/servicio-compra-planes/servicio-compra-planes.component';
import { ServicioCompraPlanesEnvioDatosComponent } from './servicios/servicio-compra-planes-envio-datos/servicio-compra-planes-envio-datos.component';
import { ContratoVisualizacionComponent } from './contratos/contrato-visualizacion/contrato-visualizacion.component';
import { UsuarioClientePersonalComponent } from './usuarios/usuario-cliente-personal/usuario-cliente-personal.component';
import { UsuarioClientePersonalModificarComponent } from './usuarios/usuario-cliente-personal-modificar/usuario-cliente-personal-modificar.component';
import { HomeComponent } from "./administrador/home/home.component";
import { DashboardComponent } from "./administrador/dashboard/dashboard.component";
import { InicioComponent } from "./administrador/inicio/inicio.component";
import { ClientesMantenimientoComponent } from "./administrador/clientes-mantenimiento/clientes-mantenimiento.component";
import { EmpleadosMantenimientoComponent } from "./administrador/empleados-mantenimiento/empleados-mantenimiento.component";
import { ContratosMantenimientoComponent } from "./administrador/contratos-mantenimiento/contratos-mantenimiento.component";
import { PagosMantenimientoComponent } from "./administrador/pagos-mantenimiento/pagos-mantenimiento.component";
import { TicketsMantenimientoComponent } from "./administrador/tickets-mantenimiento/tickets-mantenimiento.component";
import { ServiciosMantenimientoComponent } from "./administrador/servicios-mantenimiento/servicios-mantenimiento.component";
import { ClientesMantenimientoNuevoClienteComponent } from "./administrador/clientes-mantenimiento-nuevo-cliente/clientes-mantenimiento-nuevo-cliente.component";
import { ClientesMantenimientoEditarClienteComponent } from "./administrador/clientes-mantenimiento-editar-cliente/clientes-mantenimiento-editar-cliente.component";
import { ClientesMantenimientoVisualizarClienteComponent } from "./administrador/clientes-mantenimiento-visualizar-cliente/clientes-mantenimiento-visualizar-cliente.component";
import { EmpleadoMantenimientoNuevoEmpleadoComponent } from "./administrador/empleado-mantenimiento-nuevo-empleado/empleado-mantenimiento-nuevo-empleado.component";
import { EmpleadoMantenimientoEditarEmpleadoComponent } from "./administrador/empleado-mantenimiento-editar-empleado/empleado-mantenimiento-editar-empleado.component";
import { EmpleadoMantenimientoVisualizarEmpleadoComponent } from "./administrador/empleado-mantenimiento-visualizar-empleado/empleado-mantenimiento-visualizar-empleado.component";
import { ContratoMantenimientoNuevoContratoComponent } from './administrador/contrato-mantenimiento-nuevo-contrato/contrato-mantenimiento-nuevo-contrato.component';
import { ContratoMantenimientoEditarContratoComponent } from './administrador/contrato-mantenimiento-editar-contrato/contrato-mantenimiento-editar-contrato.component';
import { ContratoMantenimientoVisualizarContratoComponent } from './administrador/contrato-mantenimiento-visualizar-contrato/contrato-mantenimiento-visualizar-contrato.component';
import { ServicioMantenimientoNuevoServicioComponent } from './administrador/servicio-mantenimiento-nuevo-servicio/servicio-mantenimiento-nuevo-servicio.component';
import { ServicioMantenimientoEditarServicioComponent } from './administrador/servicio-mantenimiento-editar-servicio/servicio-mantenimiento-editar-servicio.component';
import { ServicioMantenimientoVisualizarServicioComponent } from './administrador/servicio-mantenimiento-visualizar-servicio/servicio-mantenimiento-visualizar-servicio.component';
import { TicketMantenimientoNuevoTicketComponent } from './administrador/ticket-mantenimiento-nuevo-ticket/ticket-mantenimiento-nuevo-ticket.component';
import { TicketMantenimientoEditarTicketComponent } from './administrador/ticket-mantenimiento-editar-ticket/ticket-mantenimiento-editar-ticket.component';
import { TicketMantenimientoVisualizarTicketComponent } from './administrador/ticket-mantenimiento-visualizar-ticket/ticket-mantenimiento-visualizar-ticket.component';
import { PagoMantenimientoNuevoPagoComponent } from './administrador/pago-mantenimiento-nuevo-pago/pago-mantenimiento-nuevo-pago.component';
import { PagoMantenimientoEditarPagoComponent } from './administrador/pago-mantenimiento-editar-pago/pago-mantenimiento-editar-pago.component';
import { PagoMantenimientoVisualizarPagoComponent } from './administrador/pago-mantenimiento-visualizar-pago/pago-mantenimiento-visualizar-pago.component';
import { RespuestasMantenimientoComponent } from './administrador/respuestas-mantenimiento/respuestas-mantenimiento.component';
import { RespuestaMantenimientoNuevaRespuestaComponent } from './administrador/respuesta-mantenimiento-nueva-respuesta/respuesta-mantenimiento-nueva-respuesta.component';
import { RespuestaMantenimientoEditarRespuestaComponent } from './administrador/respuesta-mantenimiento-editar-respuesta/respuesta-mantenimiento-editar-respuesta.component';
import { RespuestaMantenimientoVisualizarRespuestaComponent } from "./administrador/respuesta-mantenimiento-visualizar-respuesta/respuesta-mantenimiento-visualizar-respuesta.component";
import { TicketVisualizacionComponent } from "./tickets/ticket-visualizacion/ticket-visualizacion.component";
import { ServicioMantenimientoPlanesComponent } from './servicios/servicio-mantenimiento-planes/servicio-mantenimiento-planes.component';
import { TicketSolicitudComponent } from "./tickets/ticket-solicitud/ticket-solicitud.component";
import { TicketVisualizarComponent } from "./tickets/ticket-visualizar/ticket-visualizar.component";
import { ContratoVisualizarComponent } from "./contratos/contrato-visualizar/contrato-visualizar.component";

const routes: Routes = [
    //Seccion Principal Usuarios
    {
        path: '',
        component: UsuarioInicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'prueba1',
        component: ServicioMantenimientoPlanesComponent,
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: UsuarioInicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'nosotros',
        component: UsuarioNosotrosComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'planes',
        component: UsuarioPlanesComponent,
        pathMatch: 'full'
    },
    {
        path: 'contacto',
        component: UsuarioContactoComponent,
        pathMatch: 'full'
    },
    {
        path: 'ayudaYSoporte',
        component: UsuarioAyudaSoporteComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: UsuarioLoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: UsuarioRegisterComponent,
        pathMatch: 'full'
    },
    ////Seccion Cliente
    {
        path: 'cliente/personal/:id',
        component: UsuarioClientePersonalComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/planes/:id',
        component: ServicioCompraPlanesComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/planes/compra/:id',
        component: ServicioCompraPlanesEnvioDatosComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/contrato/:id',
        component: ContratoVisualizacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/Contratovisualizar/id/:id',
        component: ContratoVisualizarComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/tickets/:id',
        component: TicketVisualizacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/solicitar/:id',
        component: TicketSolicitudComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/visualizar/id/:id',
        component: TicketVisualizarComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente/personal/modificar/:id',
        component: UsuarioClientePersonalModificarComponent,
        pathMatch: 'full'
    },
    //Seccion Administrador
    {
        path: 'login',
        component: UsuarioLoginComponent,
        pathMatch: 'full'
    },
    { 
        path: 'inicioAdmin/:id',
        component: InicioComponent,
        children:[
            {   
                path: 'dashboard',
                component: DashboardComponent 
            },
            {   
                path: 'adminProfile/:id',
                component: HomeComponent 
            },
            {   
                path: 'clientes',
                component: ClientesMantenimientoComponent 
            },
            {   
                path: 'agregarCliente',
                component: ClientesMantenimientoNuevoClienteComponent 
            },
            {   
                path: 'editarCliente/:id',
                component: ClientesMantenimientoEditarClienteComponent 
            },
            {   
                path: 'visualizarCliente/:id',
                component: ClientesMantenimientoVisualizarClienteComponent 
            },
            {   
                path: 'empleados',
                component: EmpleadosMantenimientoComponent 
            },
            {   
                path: 'agregarEmpleado',
                component: EmpleadoMantenimientoNuevoEmpleadoComponent 
            },
            {   
                path: 'editarEmpleado/:id',
                component: EmpleadoMantenimientoEditarEmpleadoComponent 
            },
            {   
                path: 'visualizarEmpleado/:id',
                component: EmpleadoMantenimientoVisualizarEmpleadoComponent 
            },

            {   
                path: 'contratos',
                component: ContratosMantenimientoComponent 
            },
            {   
                path: 'agregarContrato',
                component: ContratoMantenimientoNuevoContratoComponent 
            },
            {   
                path: 'editarContrato/:id',
                component: ContratoMantenimientoEditarContratoComponent 
            },
            {   
                path: 'visualizarContrato/:id',
                component: ContratoMantenimientoVisualizarContratoComponent 
            },
            {   
                path: 'pagos',
                component: PagosMantenimientoComponent 
            },
            {   
                path: 'agregarPago',
                component: PagoMantenimientoNuevoPagoComponent 
            },
            {   
                path: 'editarPago/:id',
                component: PagoMantenimientoEditarPagoComponent 
            },
            {   
                path: 'visualizarPago/:id',
                component: PagoMantenimientoVisualizarPagoComponent 
            },
            {   
                path: 'tickets',
                component: TicketsMantenimientoComponent 
            },
            {   
                path: 'agregarTicket',
                component: TicketMantenimientoNuevoTicketComponent 
            },
            {   
                path: 'editarTicket/:id',
                component: TicketMantenimientoEditarTicketComponent 
            },
            {   
                path: 'visualizarTicket/:id',
                component: TicketMantenimientoVisualizarTicketComponent 
            },
            {   
                path: 'servicios',
                component: ServiciosMantenimientoComponent 
            },
            {   
                path: 'agregarServicio',
                component: ServicioMantenimientoNuevoServicioComponent 
            },
            {   
                path: 'editarServicio/:id',
                component: ServicioMantenimientoEditarServicioComponent 
            },
            {   
                path: 'visualizarServicio/:id',
                component: ServicioMantenimientoVisualizarServicioComponent 
            },
            {   
                path: 'respuestas',
                component: RespuestasMantenimientoComponent 
            },
            {   
                path: 'agregarRespuesta',
                component: RespuestaMantenimientoNuevaRespuestaComponent 
            },
            {   
                path: 'editarRespuesta/:id',
                component: RespuestaMantenimientoEditarRespuestaComponent 
            },
            {   
                path: 'visualizarRespuesta/:id',
                component: RespuestaMantenimientoVisualizarRespuestaComponent 
            }          

        ] 
    }
    
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ] 
})
export class AppRoutingModule {

}