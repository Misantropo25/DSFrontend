import { Component, OnInit } from '@angular/core';
import { AdministradorContratoService } from 'src/app/service/administradorContrato.service';

@Component({
  selector: 'app-contratos-mantenimiento',
  templateUrl: './contratos-mantenimiento.component.html',
  styleUrls: ['./contratos-mantenimiento.component.scss']
})
export class ContratosMantenimientoComponent implements OnInit {

  constructor(private contratoService: AdministradorContratoService) { 
    this.contratoService.listarContrato();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.contratoService.lista;
  }

  eliminarContrato(idContrato:number) {
    this.contratoService.eliminarContrato(idContrato);
  }

  contratoActivo(valor: Boolean):String{
    if(valor==true){
      return "Contrato Activo";
    }
    return "Contrato Terminado";

  }
}
