import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';


@Component({
  selector: 'app-clientes-mantenimiento-editar-cliente',
  templateUrl: './clientes-mantenimiento-editar-cliente.component.html',
  styleUrls: ['./clientes-mantenimiento-editar-cliente.component.scss']
})
export class ClientesMantenimientoEditarClienteComponent implements OnInit {
  
  cliente: Cliente = {
    id: 0,
    dni: "",
    apePaterno: "",
    apeMaterno: "",
    sexo: "",
    tipDocIdentificacion: "",
    email: "",
    numTelefono: "",
    nacionalidad: "",
    direccion: "",
    nomUsuario: "",
    nombre: "",
    contrasenia: "",
    clienteSolicito: [],
    correspondeCliente: []
  };

  // private idCliente: number = 0;
  // public clienteEnUso: Cliente[] = [];
  
  

  constructor(private clienteService: AdministradorClienteService, private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.clienteService.listarClientePorId(parseInt(id)).subscribe((data: Cliente) => {
        this.cliente = data
      });
    }

    
  }
  
  
  
  editarCliente(id:string,dni:string, apePaterno:string, apeMaterno:string, sexo:string, tipDocIdentificacion:string, email:string,numTelefono:string,nacionalidad:string,direccion:string,nomUsuario:string,nombre:string,contrasenia:string): void{
    const clienteModificado: Cliente = {
      id: 0,
      dni: dni,
      apePaterno: apePaterno,
      apeMaterno: apeMaterno,
      sexo: sexo,
      tipDocIdentificacion: tipDocIdentificacion,
      email: email,
      numTelefono: numTelefono,
      nacionalidad: nacionalidad,
      direccion: direccion,
      nomUsuario: nomUsuario,
      nombre: nombre,
      contrasenia: contrasenia,
      clienteSolicito: [],
      correspondeCliente: []
    };
    this.clienteService.editarCliente(parseInt(id),clienteModificado);
  }   

}

