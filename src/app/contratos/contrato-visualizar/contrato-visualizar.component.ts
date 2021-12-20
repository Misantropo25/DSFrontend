import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorContratoService } from 'src/app/service/administradorContrato.service';
import { AdministradorServicioService } from 'src/app/service/administradorServicio.service';
import { AdministradorClienteService } from '../../service/administradorCliente.service';

@Component({
  selector: 'app-contrato-visualizar',
  templateUrl: './contrato-visualizar.component.html',
  styleUrls: ['./contrato-visualizar.component.css']
})
export class ContratoVisualizarComponent implements OnInit {
  tiempoContrato: Date|number = new Date;
  tiempo: Number|Date = 0;
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

    servicio:Servicio = {
        id: 0,
        costoServicio: 0,
        descripcion: '',
        estadoServicio: true,
        fecCreacion: new Date,
        fecExpiracion: new Date,
        nombreServicio: ''
    };

    contrato: Contrato ={
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
  
    constructor(private contratoService: AdministradorContratoService,private clienteService: AdministradorClienteService,private servicioService: AdministradorServicioService, private _route: ActivatedRoute) { 
        this.contratoService.listarContrato();
    }

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
        if(id != null){
          this.id = id;
        }
        if(id!=null){
          this.contratoService.listarContratoPorId(parseInt(id)).subscribe((data: Contrato) => {
            this.contrato = data
          });
        }

      }

      contratoActivo(valor: Boolean):String {
        if(valor){
          return "El contrato se encuentra activo";
        }
        return "El contrato se encuentra terminado";
      }

}
