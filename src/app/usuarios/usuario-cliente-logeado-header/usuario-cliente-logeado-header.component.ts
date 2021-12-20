import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';

@Component({
  selector: 'app-usuario-cliente-logeado-header',
  templateUrl: './usuario-cliente-logeado-header.component.html',
  styleUrls: ['./usuario-cliente-logeado-header.component.css']
})
export class UsuarioClienteLogeadoHeaderComponent implements OnInit {
  id: string = "";
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

  constructor(private _route: ActivatedRoute, private clienteService: AdministradorClienteService) { 
    this.clienteService.listarCliente();
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id != null){
      this.id = id;
    }
    if(id!=null){
      this.clienteService.listarClientePorId(parseInt(id)).subscribe((data: Cliente) => {
        this.cliente = data
      });
    }
    
  }

  get lista() {
    return this.clienteService.lista;
  } 


}
