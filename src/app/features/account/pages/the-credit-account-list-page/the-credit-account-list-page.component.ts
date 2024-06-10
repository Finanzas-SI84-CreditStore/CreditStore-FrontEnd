import { AccountQuery } from './../../models/account-query';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import {NavbarComponent} from "../../../../public/components/navbar/navbar.component";
import {DatePipe, NgForOf, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-the-credit-account-list-page',
  templateUrl: './the-credit-account-list-page.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    SlicePipe,
    DatePipe,
    NgForOf
  ],
  styleUrls: ['./the-credit-account-list-page.component.css']
})
export class TheCreditAccountListPageComponent implements OnInit {
  accounts: AccountQuery[] = [];
  userId: string = '1f39b2df-b4e3-446e-ad1a-6922d4b7a235'; // Reemplaza con el ID del usuario actual

  // Propiedades para la paginación
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.accountService.getAllAccountsByUser(this.userId).subscribe(
      (response: AccountQuery[]) => {
        this.accounts = response;
        this.totalItems = response.length;
      },
      (error) => {
        console.error('Error al obtener las cuentas', error);
      }
    );
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = +event.target.value;
    this.currentPage = 1;
  }

  exportAccounts() {
    // Lógica para exportar las cuentas a un archivo
    console.log('Exportar cuentas');
  }

  protected readonly Math = Math;
}