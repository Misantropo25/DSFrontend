import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { Ticket } from '../../interfaces/ticket.interface';


@Component({
  selector: 'app-clientes-mantenimiento-visualizar-cliente',
  templateUrl: './clientes-mantenimiento-visualizar-cliente.component.html',
  styleUrls: ['./clientes-mantenimiento-visualizar-cliente.component.scss']
})
export class ClientesMantenimientoVisualizarClienteComponent implements OnInit {
  
  servicio:Servicio={
    id: 0,
    costoServicio: 0,
    descripcion: '',
    estadoServicio: true,
    fecCreacion: new Date,
    fecExpiracion: new Date,
    nombreServicio: ''
  }

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

  contrato: Contrato={
    id: 0,
    descripcion: '',
    direccion: '',
    distritoDireccion: '',
    estadoContrato: true,
    fecCreacion:  new Date,
    fecFinalizacion:  new Date,
    modDePago: '',
    refDireccion: '',
    restricciones: '',
    tasaDeMora: 0,
    correspondeCliente: this.cliente,
    tieneServicio: this.servicio
  }

  

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


  




}
