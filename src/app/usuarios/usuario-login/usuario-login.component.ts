import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { AdministradorEmpleadoService } from 'src/app/service/administradorEmpleado.service';
import { Cliente } from '../../interfaces/cliente.interface';






@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
  public tipoCliente: String = "";
  public palabra: String = "";
  public id: number = 0;

  cliente: Cliente = {
    id: 0,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: '',
    direccion: '',
    email: '',
    nacionalidad: '',
    nomUsuario: '',
    nombre: '',
    numTelefono: '',
    sexo: '',
    tipDocIdentificacion: '',
    clienteSolicito: [],
    correspondeCliente: []
  }

  empleado: Empleado = {
    id: 0,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: '',
    direccion: '',
    email: '',
    nacionalidad: '',
    nomUsuario: '',
    nombre: '',
    numTelefono: '',
    sexo: '',
    tipDocIdentificacion: '',
    area: ''
  }

  public listaClientes: Cliente[] = [];
  public listaEmpleados: Empleado[] = [];
  public listaUsuariosClientes:Array<string>[] = [];
  public listaUsuariosEmpleados:Array<string>[] = [];
  
  public formLogin: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder ,private clienteService: AdministradorClienteService,private empleadoService: AdministradorEmpleadoService) {
    this.clienteService.listarCliente();
    this.empleadoService.listarEmpleado();
  }
  
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      usuario: ['',Validators.required],
      contrasenia: ['',Validators.required]
    })
    
    this.clienteService.cargarClientes().subscribe((resp: any) => {
      console.log(resp);
      this.listaClientes = resp;
      
      for(let clientes of this.listaClientes){
        var Usuarios: [string,string,string] = ["","",""];
        Usuarios[0] = clientes.nomUsuario;
        Usuarios[1] = clientes.contrasenia;
        Usuarios[2] = clientes.id.toString();
        this.listaUsuariosClientes.push(Usuarios);
      }
    })
    
    this.empleadoService.cargarEmpleados().subscribe((resp: any) => {
      console.log(resp);
      this.listaEmpleados = resp;
      
      for(let empleado of this.listaEmpleados){
        var Usuarios: [string,string,string] = ["","",""];
        Usuarios[0] = empleado.nomUsuario;
        Usuarios[1] = empleado.contrasenia;
        Usuarios[2] = empleado.id.toString();
        console.log(Usuarios);
        this.listaUsuariosEmpleados.push(Usuarios);
      }
    })


  }

  send(): any{
    // console.log(this.formLogin.value);
    // console.log(this.listaUsuariosEmpleados);
    // console.log(this.listaUsuariosClientes);
    // console.log(this.formLogin.value.usuario);
    this.validarUsuario();
  }
  
  validarUsuario(): boolean{
    for(let clientes of this.listaUsuariosClientes){
      if(this.formLogin.value.usuario == clientes[0] && this.formLogin.value.contrasenia == clientes[1]){
        this.tipoCliente = "cliente";
        this.palabra = "/cliente/personal";
        this.id = parseInt(clientes[2]);
        console.log(this.id);
        
        return true;
      }
    }
    for(let empleados of this.listaUsuariosEmpleados){
      if(this.formLogin.value.usuario == empleados[0] && this.formLogin.value.contrasenia == empleados[1]){
        this.tipoCliente = "empleado";
        this.palabra = "/inicioAdmin/id/adminProfile/";
        this.id = parseInt(empleados[2]);
        console.log(this.id);
        return true;
      }
    }
    this.palabra = "/login";
    return false;
  }

  
}
