import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioInicioComponent } from './usuario-inicio/usuario-inicio.component';
import { UsuarioHeaderComponent } from './usuario-header/usuario-header.component';
import { UsuarioFooterComponent } from './usuario-footer/usuario-footer.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioMantenimientoEmpleadoComponent } from './usuario-mantenimiento-empleado/usuario-mantenimiento-empleado.component';
import { UsuarioMantenimientoClienteComponent } from './usuario-mantenimiento-cliente/usuario-mantenimiento-cliente.component';
import { UsuarioMatenimientoInicioComponent } from './usuario-matenimiento-interfaz-inicio/usuario-matenimiento-inicio.component';
import { UsuarioClienteLogeadoHeaderComponent } from './usuario-cliente-logeado-header/usuario-cliente-logeado-header.component';
import { UsuarioAyudaSoporteComponent } from './usuario-ayuda-soporte/usuario-ayuda-soporte.component';
import { UsuarioPlanesComponent } from './usuario-planes/usuario-planes.component';
import { UsuarioNosotrosComponent } from './usuario-nosotros/usuario-nosotros.component';
import { UsuarioContactoComponent } from './usuario-contacto/usuario-contacto.component';
import { AppRoutingModule } from '../app-routing.module';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';
import { UsuarioClientePersonalComponent } from './usuario-cliente-personal/usuario-cliente-personal.component';
import { UsuarioValidarLoginComponent } from './usuario-validar-login/usuario-validar-login.component';
import { UsuarioClientePersonalModificarComponent } from './usuario-cliente-personal-modificar/usuario-cliente-personal-modificar.component';



@NgModule({
  declarations: [
    UsuarioInicioComponent,
    UsuarioHeaderComponent,
    UsuarioFooterComponent,
    UsuarioLoginComponent,
    UsuarioMantenimientoEmpleadoComponent,
    UsuarioMantenimientoClienteComponent,
    UsuarioMatenimientoInicioComponent,
    UsuarioClienteLogeadoHeaderComponent,
    UsuarioAyudaSoporteComponent,
    UsuarioPlanesComponent,
    UsuarioNosotrosComponent,
    UsuarioContactoComponent,
    UsuarioRegisterComponent,
    UsuarioClientePersonalComponent,
    UsuarioValidarLoginComponent,
    UsuarioClientePersonalModificarComponent
    
  ],
  exports:[
    UsuarioInicioComponent,
    UsuarioHeaderComponent,
    UsuarioFooterComponent,
    UsuarioLoginComponent,
    UsuarioMantenimientoEmpleadoComponent,
    UsuarioMantenimientoClienteComponent,
    UsuarioMatenimientoInicioComponent,
    UsuarioClienteLogeadoHeaderComponent,
    UsuarioAyudaSoporteComponent,
    UsuarioPlanesComponent,
    UsuarioNosotrosComponent,
    UsuarioContactoComponent,
    UsuarioRegisterComponent,
    UsuarioClientePersonalComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})

export class UsuariosModule { }
