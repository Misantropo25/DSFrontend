import { Component, OnInit } from '@angular/core';
import { AdministradorPagoService } from 'src/app/service/administradorPago.service';

@Component({
  selector: 'app-pagos-mantenimiento',
  templateUrl: './pagos-mantenimiento.component.html',
  styleUrls: ['./pagos-mantenimiento.component.scss']
})
export class PagosMantenimientoComponent implements OnInit {

  constructor(private pagoService: AdministradorPagoService) { 
    this.pagoService.listarPagos();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.pagoService.lista;
  }

  eliminarPago(idPago:number) {
    this.pagoService.eliminarPago(idPago);
  }
  

}
