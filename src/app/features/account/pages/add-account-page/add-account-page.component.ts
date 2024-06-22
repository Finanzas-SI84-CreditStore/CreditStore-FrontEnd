import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountRequest } from '../../models/account-request.model';
import { FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from "../../../../public/components/navbar/navbar.component";
import { FieldErrorComponent } from '../../../../shared/components/field-error/field-error.component';
import { NgOptionComponent, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { SessionStorageService } from '../../../../shared/services/session-storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountResponse } from '../../models/account-response.model';

@Component({
  selector: 'app-add-account-page',
  templateUrl: './add-account-page.component.html',
  standalone: true,
  styleUrls: ['./add-account-page.component.css'],
  imports: [
    MatTooltipModule,
    MatIconModule,
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    FieldErrorComponent,
    NgSelectModule
  ],
  providers: [NgSelectComponent, NgOptionComponent],
})
export class AddAccountPageComponent implements OnInit {
  AccountRequest: AccountRequest = {
    valorCompra: 0,
    tipoTasa: '',
    capitalizacionTasa: '',
    valorTasa: 0,
    tipoCredito: '',
    numeroCuotas: 0,
    plazoGracia: false,
    periodoGracia: 0,
    paymentDate: new Date('2024-07-01'),
    clientId: ''
  };

  capitalizationPeriods = [ 'ANUAL', 'MENSUAL', 'DIARIA' ];
  interestTypes = [ 'EFECTIVA', 'NOMINAL' ];
  creditType = [ 'VENCIMIENTO', 'MENSUAL'];
  gracePeriod = [ 'TOTAL', 'NO', 'PARCIAL' ];

  sharesNumber = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' }
  ];

  gracePeriodLength = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' }
  ];

  formCredit: FormGroup;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private sessionStorageService: SessionStorageService,
    private toastr: ToastrService
  ) {
    this.formCredit = this.formBuilder.group({
      purchaseValue: new FormControl(0, [Validators.required, Validators.min(1)]),
      interestType: new FormControl('NOMINAL', Validators.required),
      capitalizationPeriod: new FormControl('MENSUAL', Validators.required),
      interestRate: new FormControl(0, [Validators.required, Validators.min(0)]),
      creditType: new FormControl('VENCIMIENTO', Validators.required),
      sharesNumber: new FormControl(1, Validators.required),
      gracePeriod: new FormControl(false, Validators.required),
      gracePeriodLength: new FormControl(0, Validators.required),
    });
  }

  private clientsId: string = "";

  ngOnInit() {
    this.clientsId = this.sessionStorageService.getItem('clientsId');
  }

  onSubmit() {
    if (this.formCredit.valid) {
      this.AccountRequest = {
        valorCompra: this.formCredit.value.purchaseValue ?? 0,
        tipoTasa: this.formCredit.value.interestType ?? '',
        capitalizacionTasa: this.formCredit.value.capitalizationPeriod ?? '',
        valorTasa: this.formCredit.value.interestRate ?? 0,
        tipoCredito: this.formCredit.value.creditType ?? '',
        numeroCuotas: this.formCredit.value.sharesNumber ?? 0,
        plazoGracia: this.formCredit.value.gracePeriod ?? false,
        periodoGracia: this.formCredit.value.gracePeriodLength ?? 0,
        paymentDate: new Date(),
        clientId: this.clientsId
      };

      this.accountService.createAccount(this.AccountRequest).subscribe(
        response => {
          this.toastr.success('Cuenta creada exitosamente:');
        },
        error => {
          this.toastr.error(error.message);
        }
      );
    } else {
      this.toastr.error('Por favor, completa todos los campos requeridos.');
    }
  }

  changeTipoTasa(tasa: string): void {
    if (tasa === 'EFECTIVA') {
      this.formCredit.controls['capitalizationPeriod'].clearValidators();
      this.formCredit.controls['capitalizationPeriod'].setValue('');
      this.formCredit.controls['capitalizationPeriod'].disable();
    } else {
      this.formCredit.controls['capitalizationPeriod'].enable();
      this.formCredit.controls['capitalizationPeriod'].setValue('MENSUAL');
      this.formCredit.controls['capitalizationPeriod'].setValidators(Validators.required);
    }
    this.formCredit.controls['capitalizationPeriod'].updateValueAndValidity();
  }

  changeTipoCredito(tipo: string): void {
    if (tipo === 'VENCIMIENTO') {
      this.formCredit.controls['sharesNumber'].clearValidators();
      this.formCredit.controls['sharesNumber'].setValue(0);
      this.formCredit.controls['sharesNumber'].disable();
    } else {
      this.formCredit.controls['sharesNumber'].enable();
      this.formCredit.controls['sharesNumber'].setValue(1);
      this.formCredit.controls['sharesNumber'].setValidators(Validators.required);
    }
    this.formCredit.controls['creditType'].updateValueAndValidity();
  }

  changePeriodoGracia(gracia: string): void {
    if (gracia === 'NO') {
      this.formCredit.controls['gracePeriodLength'].clearValidators();
      this.formCredit.controls['gracePeriodLength'].setValue(0);
      this.formCredit.controls['gracePeriodLength'].disable();
    } else {
      this.formCredit.controls['gracePeriodLength'].enable();
      this.formCredit.controls['gracePeriodLength'].setValue(1);
      this.formCredit.controls['gracePeriodLength'].setValidators(Validators.required);
    }
    this.formCredit.controls['gracePeriodLength'].updateValueAndValidity();
  }
}
