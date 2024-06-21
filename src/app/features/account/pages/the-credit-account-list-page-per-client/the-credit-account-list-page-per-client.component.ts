import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../public/components/navbar/navbar.component';
import { DatePipe, NgForOf, SlicePipe } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { SessionStorageService } from '../../../../shared/services/session-storage.service';
import { AccountQuery } from '../../models/account-query';
import { AccountResponse } from '../../models/account-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-credit-account-list-page-per-client',
  standalone: true,
  imports: [
      NavbarComponent,
      SlicePipe,
      DatePipe,
      NgForOf
    
  ],
  templateUrl: './the-credit-account-list-page-per-client.component.html',
  styleUrl: './the-credit-account-list-page-per-client.component.css'
})
export class TheCreditAccountListPagePerClientComponent {

  accounts: AccountResponse[] = [];
  clientsId: string = ''; // Reemplaza con el ID del usuario actual

  

  constructor(
    private accountService: AccountService,
    private sessionStorageService: SessionStorageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.clientsId = this.sessionStorageService.getItem('clientsId');
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.accountService.getaccountsbyClient(this.clientsId).subscribe(
      (response: AccountResponse[]) => {
        this.accounts = response;
        console.log('cuentas recibidos:', this.accounts);
      },
      (error) => {
        console.error('Error al obtener las cuentas', error);
      }
    );
  }



  verpagos(accountId: number) {
    this.sessionStorageService.setItem("accountId",accountId);
    this.router.navigate(['payments']); 
  }
}
