import { Component, OnInit } from '@angular/core';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { AdministradorEmpleadoService } from 'src/app/service/administradorEmpleado.service';


@Component({
  selector: 'app-usuario-validar-login',
  templateUrl: './usuario-validar-login.component.html',
  styleUrls: ['./usuario-validar-login.component.css']
})
export class UsuarioValidarLoginComponent implements OnInit {

  listaUsernames:String[] = [];
  listaPasswords:String[] = [];

  listaUsuarios:Array<String>[] = [];

  Usuarios: [NomUsuario:string,contrasenia:string] = [" ",""];

  
  constructor(private clienteService: AdministradorClienteService,private empleadoService: AdministradorEmpleadoService) {
    this.clienteService.listarCliente();
    this.empleadoService.listarEmpleado();
  }

  ngOnInit(): void {
    for (let clientes of this.clienteService.lista){
      this.listaUsernames.push(clientes.nomUsuario); 
      this.listaPasswords.push(clientes.contrasenia);

      this.Usuarios[0]=clientes.nomUsuario;
      this.Usuarios[1]=clientes.contrasenia;

      this.listaUsuarios.push(this.Usuarios);
      console.log(this.listaUsuarios);
    }
    for(let empleados of this.empleadoService.lista){
      this.listaUsernames.push(empleados.nomUsuario);
      this.listaPasswords.push()
    }
    
  }


  get lista() {
    return this.clienteService.lista;
  }
  




}
