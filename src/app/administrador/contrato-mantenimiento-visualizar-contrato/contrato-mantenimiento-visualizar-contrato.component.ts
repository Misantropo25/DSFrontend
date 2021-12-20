
import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/contrato.interface';
import { AdministradorContratoService } from 'src/app/service/administradorContrato.service';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { AdministradorServicioService } from 'src/app/service/administradorServicio.service';



@Component({
  selector: 'app-contrato-mantenimiento-visualizar-contrato',
  templateUrl: './contrato-mantenimiento-visualizar-contrato.component.html',
  styleUrls: ['./contrato-mantenimiento-visualizar-contrato.component.scss']
})
export class ContratoMantenimientoVisualizarContratoComponent implements OnInit {

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
  
  contrato: Contrato={
    id: 0,
    descripcion: '',
    direccion: '',
    distritoDireccion: '',
    estadoContrato: true,
    fecCreacion: new Date(),
    fecFinalizacion: new Date(),
    modDePago: '',
    refDireccion: '',
    restricciones: '',
    tasaDeMora: 0,
    correspondeCliente: this.cliente,
    tieneServicio: this.servicio
  }

  constructor(private contratoService: AdministradorContratoService,private clienteService: AdministradorClienteService,private servicioService: AdministradorServicioService, private _route: ActivatedRoute) { 
    this.clienteService.listarCliente();
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.contratoService.listarContratoPorId(parseInt(id)).subscribe((data: Contrato) => {
        this.contrato = data;
        console.log(this.contrato);
      });
    }
    
    // for(let clientes of this.clienteService.lista){
    //   for(let contratos of clientes.correspondeCliente){
    //     if(id!=null && contratos!=undefined){
    //       if(contratos.id == parseInt(id) && contratos != null){
    //         this.clienteService.listarClientePorId(clientes.id).subscribe((data: Cliente) => {
    //           this.cliente = data;
    //           console.log(this.cliente);
    //         });
    //       }

    //     }
    //   }

    // }


  }

  



}
