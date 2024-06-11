import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountRequest } from '../../models/account-request.model';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { MatOption } from "@angular/material/autocomplete";
import { MatSelect } from "@angular/material/select";
import { CommonModule, NgForOf } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from "../../../../public/components/navbar/navbar.component";
import { FieldErrorComponent } from '../../../../shared/components/field-error/field-error.component';
import { NgOptionComponent, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-account-page',
  templateUrl: './add-account-page.component.html',
  standalone: true,
  styleUrls: ['./add-account-page.component.css'],
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
    MatIconModule,
    //ELIMINAR ESAS IMPORTACIONES SIN USO

    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    FieldErrorComponent,
    NgSelectModule,
  ],
  providers: [NgSelectComponent, NgOptionComponent],

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
  capitalizationPeriods = [ 'ANUAL', 'MENSUAL', 'DIARIA' ];
  interestTypes = [ 'EFECTIVA', 'NOMINAL' ];

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

  formCredit = this.formBuilder.group({
    interestType: new FormControl('NOMINAL', Validators.required),
    capitalizationPeriod: new FormControl('MENSUAL', Validators.required),

  });


  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder
  ) { }

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

  changeTipoTasa(tasa: string):void{
    if(tasa === 'EFECTIVA'){
      this.formCredit.controls.capitalizationPeriod.clearValidators();
      this.formCredit.controls.capitalizationPeriod.setValue('');
      this.formCredit.controls.capitalizationPeriod.disable();
      }
    else{
      this.formCredit.controls.capitalizationPeriod.enable();
      this.formCredit.controls.capitalizationPeriod.setValue('MENSUAL');
      this.formCredit.controls.capitalizationPeriod.setValidators(Validators.required);
    }
    this.formCredit.controls.capitalizationPeriod.updateValueAndValidity();
  }
}
