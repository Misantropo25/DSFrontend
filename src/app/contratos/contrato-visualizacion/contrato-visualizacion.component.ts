import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';
import { AdministradorContratoService } from 'src/app/service/administradorContrato.service';


@Component({
  selector: 'app-contrato-visualizacion',
  templateUrl: './contrato-visualizacion.component.html',
  styleUrls: ['./contrato-visualizacion.component.css']
})
export class ContratoVisualizacionComponent implements OnInit {
  id: String = "";

  unicos:Contrato[] = [];

  cliente: Cliente= {
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

  listaContrato: Contrato[] = [];

  constructor(private _route: ActivatedRoute,private contratoService: AdministradorContratoService, private clienteService: AdministradorClienteService) { }

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
    if(id!=null){
      this.clienteService.listarClientePorId(parseInt(id)).subscribe((data: Cliente) => {
        this.cliente = data
      });
    }
  }
  
  get lista() {
    return this.contratoService.lista;
  }

  get listaDeContrato() {
    for (let contratos of this.cliente.correspondeCliente){
      console.log(contratos);
      this.listaContrato.push(contratos); 
    }
    this.listaContrato.forEach((item)=>{
    	//pushes only unique element
        if(!this.unicos.includes(item)){
          this.unicos.push(item);
    	}
    })
    
    return this.unicos;
    
  }

  contratoActivo(valor: Boolean):String{
    if(valor==true){
      return "Contrato Activo";
    }
    return "Contrato Terminado";

  }

  



}
