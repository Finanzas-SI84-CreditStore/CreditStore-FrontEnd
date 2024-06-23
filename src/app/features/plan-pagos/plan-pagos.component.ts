import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AccountService } from './service/planPagos.service';
import { ResponseData, DatosEntrada, DatosSalida } from './model/responseData.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NavbarComponent } from "../../public/components/navbar/navbar.component";

@Component({
    selector: 'app-plan-pagos',
    templateUrl: './plan-pagos.component.html',
    styleUrls: ['./plan-pagos.component.css'],
    standalone: true,
    imports: [CommonModule, DatePipe, NavbarComponent]
})
export class PlanPagosComponent implements OnInit {
  datosEntrada: DatosEntrada | undefined;
  datosSalidaList: DatosSalida[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccount(1);
  }

  getAccount(id: number): void {
    this.accountService.getAccountById(id).subscribe(
      (data: ResponseData) => {
        this.datosEntrada = data.datosEntrada;
        this.datosSalidaList = data.datosSalidaList;
        console.log(this.datosEntrada);
        console.log(this.datosSalidaList);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
