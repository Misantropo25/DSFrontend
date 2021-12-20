import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorContratoService } from 'src/app/service/administradorContrato.service';
import { Contrato } from '../../interfaces/contrato.interface';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';

@Component({
  selector: 'app-contrato-mantenimiento-editar-contrato',
  templateUrl: './contrato-mantenimiento-editar-contrato.component.html',
  styleUrls: ['./contrato-mantenimiento-editar-contrato.component.scss']
})
export class ContratoMantenimientoEditarContratoComponent implements OnInit {
  cliente:Cliente = {
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
  };

  servicio:Servicio = {
    id: 0,
    costoServicio: 0,
    descripcion: '',
    estadoServicio: true,
    fecCreacion: new Date,
    fecExpiracion: new Date,
    nombreServicio: ''
  };
  
  contrato: Contrato = {
    id: 0,
    descripcion: '',
    direccion: '',
    distritoDireccion: '',
    estadoContrato: true,
    fecCreacion: new Date,
    fecFinalizacion: new Date,
    modDePago: '',
    refDireccion: '',
    restricciones: '',
    tasaDeMora: 0,
    correspondeCliente: this.cliente,
    tieneServicio: this.servicio
  }

  constructor(private contratoService: AdministradorContratoService, private _route: ActivatedRoute) { 
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.contratoService.listarContratoPorId(parseInt(id)).subscribe((data: Contrato) => {
        this.contrato = data
        console.log(this.contrato);
      });
    }

  }

  editarContrato(id:string,descripcion:string,direccion:string,distritoDireccion:string,estadoContrato:string,modDePago:string,refDireccion:string,restricciones:string,tasaDeMora:string){
    const contratoModificado: Contrato = {
      id: 0,
      descripcion: descripcion,
      direccion: direccion,
      distritoDireccion: distritoDireccion,
      estadoContrato: Boolean(estadoContrato),
      fecCreacion: new Date,
      fecFinalizacion: new Date,
      modDePago: modDePago,
      refDireccion: refDireccion,
      restricciones: restricciones,
      tasaDeMora: parseFloat(tasaDeMora),
      correspondeCliente: this.cliente,
      tieneServicio: this.servicio
    };
    this.contratoService.editarContrato(parseInt(id),contratoModificado);  
  }   

  estadoContrato(valor: Boolean): String{
    if(valor==true){
      return "Contrato Activo";
    }
    return "Contrato Terminado";
  }
}
