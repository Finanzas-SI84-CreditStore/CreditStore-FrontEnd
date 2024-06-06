import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountRequest } from '../../models/account-request.model';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {HttpClientModule} from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-account-page',
  templateUrl: './add-account-page.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatFormField,
    MatInput,
    MatRadioGroup,
    MatOption,
    MatSelect,
    NgForOf,
    MatRadioButton,
    MatButton,
    HttpClientModule,
    MatTooltipModule,
    MatIconModule
  ],
  styleUrls: ['./add-account-page.component.css']
})
export class AddAccountPageComponent {
  accountRequest: AccountRequest = {
    purchaseValue: 0,
    interestType: '',
    capitalizationPeriod: '',
    interestPeriod: 0,
    interestRate: 0,
    creditType: '',
    installmentCount: 0,
    gracePeriod: false,
    gracePeriodLength: 0,
    clientId: ''
  };
  capitalizationRates = [
    { value: 'daily', viewValue: 'Diaria' },
    { value: 'monthly', viewValue: 'Mensual' },
    { value: 'annual', viewValue: 'Anual' }
  ];

  capitalizationTimes = [
    { value: '30', viewValue: 'Días' },
    { value: '30', viewValue: 'Meses' },
    { value: '12', viewValue: 'Años' }
  ];

  sharesNumber = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' }
  ];

  gracePeriods = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' }
  ];
  constructor(private accountService: AccountService) { }

  onSubmit() {
    // Establece el valor de clientId antes de enviar la solicitud
    this.accountRequest.clientId = '0bfadee8-2297-401b-81ed-5ec40fc65427'; // Reemplaza con el ID del cliente correspondiente
    this.accountService.createAccount(this.accountRequest).subscribe(
      response => {
        console.log('Cuenta creada exitosamente:', response);
        // Realizar acciones adicionales después de crear la cuenta
        const accountId = response.id;
        alert(`La cuenta con ID ${accountId} se ha creado exitosamente.`);
      },
      error => {
        console.error('Error al crear la cuenta:', error);
        // Manejar el error de forma adecuada
      }
    );
  }
}
