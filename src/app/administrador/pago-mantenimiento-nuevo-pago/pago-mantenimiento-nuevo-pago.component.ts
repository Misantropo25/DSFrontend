import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorPagoService } from 'src/app/service/administradorPago.service';

@Component({
  selector: 'app-pago-mantenimiento-nuevo-pago',
  templateUrl: './pago-mantenimiento-nuevo-pago.component.html',
  styleUrls: ['./pago-mantenimiento-nuevo-pago.component.scss']
})
export class PagoMantenimientoNuevoPagoComponent implements OnInit {
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

  servicio: Servicio = {
    id: 0,
    costoServicio: 0,
    descripcion: '',
    estadoServicio: true,
    fecCreacion: new Date,
    fecExpiracion: new Date,
    nombreServicio: ''
  }
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
  pago: Pago = {
    id: 0,
    estadoPago: true,
    fechaLimitePago: new Date,
    fechaPago: new Date,
    monto: 0,
    mora: 0,
    correspondeContrato: this.contrato
  }

  constructor(private pagoService: AdministradorPagoService) { }

  ngOnInit(): void {
  }

  crearPago(monto:string)
  {
    const nuevoPago: Pago = {
      id: 0,
      estadoPago: true,
      fechaLimitePago: new Date,
      fechaPago: new Date,
      monto: parseFloat(monto) ,
      mora: 0,
      correspondeContrato: this.contrato
    };
    this.pagoService.agregarPago(nuevoPago);
  }  

}
