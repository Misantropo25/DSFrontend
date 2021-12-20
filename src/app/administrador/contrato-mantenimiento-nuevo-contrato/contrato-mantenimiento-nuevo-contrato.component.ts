import { Component, OnInit } from '@angular/core';
import { AdministradorContratoService } from 'src/app/service/administradorContrato.service';
import { Contrato } from '../../interfaces/contrato.interface';

import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { AdministradorServicioService } from 'src/app/service/administradorServicio.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { delay } from 'rxjs';

@Component({
  selector: 'app-contrato-mantenimiento-nuevo-contrato',
  templateUrl: './contrato-mantenimiento-nuevo-contrato.component.html',
  styleUrls: ['./contrato-mantenimiento-nuevo-contrato.component.scss']
})
export class ContratoMantenimientoNuevoContratoComponent implements OnInit {
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

  constructor(private contratoService: AdministradorContratoService, private clienteService: AdministradorClienteService, private servicioService: AdministradorServicioService) { 
    this.clienteService.listarCliente();
    this.servicioService.listarServicios();
  }

  ngOnInit(): void {
  }

  get listaClientes() {
    return this.clienteService.lista;
  }

  get listaServicios() {
    return this.servicioService.lista;
  }

  VerificarDatosIngresados(idCLiente:string, idServicio:string){
      this.clienteService.listarClientePorId(parseInt(idCLiente)).subscribe((data: Cliente) => {
        this.cliente = data;
        
      });
      this.servicioService.listarServicioPorId(parseInt(idServicio)).subscribe((data: Servicio) => {
        this.servicio = data;
        
      });
  }




  crearContrato(descripcion:string,direccion:string,distritoDireccion:string,modDePago:string,refDireccion:string,restricciones:string,tasaDeMora:string,idCLiente:string, idServicio:string){
      
      // this.VerificarDatosIngresados(idCLiente, idServicio);
      this.cliente.id=parseInt(idCLiente);
      this.servicio.id=parseInt(idServicio);
      

      var contratoNuevo: Contrato = {
        id: 0,
        descripcion: descripcion,
        direccion: direccion,
        distritoDireccion: distritoDireccion,
        estadoContrato: true,
        fecCreacion: new Date,
        fecFinalizacion: new Date,
        modDePago: modDePago,
        refDireccion: refDireccion,
        restricciones: restricciones,
        tasaDeMora: parseFloat(tasaDeMora),
        correspondeCliente: this.cliente,
        tieneServicio: this.servicio
      };
      console.log(this.cliente);
      console.log(this.servicio);
      this.contratoService.agregarContrato(contratoNuevo);
    }
}
