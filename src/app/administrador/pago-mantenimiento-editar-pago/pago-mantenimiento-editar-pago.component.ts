import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorPagoService } from 'src/app/service/administradorPago.service';

@Component({
  selector: 'app-pago-mantenimiento-editar-pago',
  templateUrl: './pago-mantenimiento-editar-pago.component.html',
  styleUrls: ['./pago-mantenimiento-editar-pago.component.scss']
})
export class PagoMantenimientoEditarPagoComponent implements OnInit {
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


  constructor(private pagoService: AdministradorPagoService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.pagoService.listarPagoPorId(parseInt(id)).subscribe((data: Pago) => {
        this.pago = data
      });
    }
  }

  editarPago(monto:string,estadoPago:string,fechaPago:string,mora:string)
  {
    
    const nuevoPago: Pago = {
      id: 0,
      estadoPago: Boolean(estadoPago),
      fechaLimitePago: new Date,
      fechaPago: new Date(fechaPago),
      monto: parseFloat(monto) ,
      mora: parseFloat(mora),
      correspondeContrato: this.contrato
    };
    this.pagoService.agregarPago(nuevoPago);
  }


}
