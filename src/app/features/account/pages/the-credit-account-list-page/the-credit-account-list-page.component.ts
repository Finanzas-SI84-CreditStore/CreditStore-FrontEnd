import { AccountQuery } from './../../models/account-query';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import {NavbarComponent} from "../../../../public/components/navbar/navbar.component";
import {DatePipe, NgForOf, SlicePipe} from "@angular/common";
import { SessionStorageService } from '../../../../shared/services/session-storage.service';

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
  userId: string = ''; // Reemplaza con el ID del usuario actual

  

  constructor(
    private accountService: AccountService,
    private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {
    this.userId = this.sessionStorageService.getItem('userId');
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.accountService.getAllAccountsByUser(this.userId).subscribe(
      (response: AccountQuery[]) => {
        this.accounts = response;
        console.log('cuentas recibidos:', this.accounts);
      },
      (error) => {
        console.error('Error al obtener las cuentas', error);
      }
    );
  }

  
}