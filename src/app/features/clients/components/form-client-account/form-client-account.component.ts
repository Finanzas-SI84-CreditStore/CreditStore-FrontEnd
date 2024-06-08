import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FieldErrorComponent } from '../../../../shared/components/field-error/field-error.component';
import { NumericInputDirective } from '../../../../shared/directives/numeric-input.directive';
import { NgSelectComponent, NgSelectModule, NgOptionComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-form-client-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldErrorComponent, NumericInputDirective, NgSelectModule,],
  providers: [NgSelectComponent, NgOptionComponent],
  templateUrl: './form-client-account.component.html',
  styleUrl: './form-client-account.component.css'
})
export class FormClientAccountComponent {
  paymentDays: number[] = [5, 10, 15, 20, 25];
  form = this.formBuilder.group({
    name: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    dni: new FormControl<string>('', [Validators.required,]),
    birthDate: new FormControl<Date | null>(null, Validators.required),
    address: new FormControl<string>(''),
    paymentDay: new FormControl<number>(5, Validators.required),
    creditLine: new FormControl<number | null>(null, Validators.required)
  });

  constructor(private formBuilder: FormBuilder, public modalService: NgbActiveModal) { }


}
