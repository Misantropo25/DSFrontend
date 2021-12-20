import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorClienteService } from 'src/app/service/administradorCliente.service';

@Component({
  selector: 'app-clientes-mantenimiento',
  templateUrl: './clientes-mantenimiento.component.html',
  styleUrls: ['./clientes-mantenimiento.component.scss']
})

export class ClientesMantenimientoComponent implements OnInit {
  constructor(private clienteService: AdministradorClienteService){
    this.clienteService.listarCliente();
  }
  
  ngOnInit():void {}

  get lista() {
    return this.clienteService.lista;
  }

  eliminarCliente(idCliente:number) {
    this.clienteService.eliminarCliente(idCliente);
  }
  
  
}

  







