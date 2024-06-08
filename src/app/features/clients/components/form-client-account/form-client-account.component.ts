import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FieldErrorComponent } from '../../../../shared/components/field-error/field-error.component';
import { NumericInputDirective } from '../../../../shared/directives/numeric-input.directive';
import { NgSelectComponent, NgSelectModule, NgOptionComponent } from '@ng-select/ng-select';
import { ClientService } from '../../services/client.service';
import { ClientReq } from '../../models/client-req';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-client-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldErrorComponent, NumericInputDirective, NgSelectModule,],
  providers: [NgSelectComponent, NgOptionComponent],
  templateUrl: './form-client-account.component.html',
  styleUrl: './form-client-account.component.css'
})
export class FormClientAccountComponent {
  //TODO: Cambiar por el id del usuario logueado
  userId: string = 'f72a9a70-3bb8-4610-92e3-0ef974fcff00'

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

  constructor(private formBuilder: FormBuilder, public modalService: NgbActiveModal,
    private clientService: ClientService, private toastr: ToastrService
  ) { }

  onSave(): void {
    this.clientService.createClient(this.userId, this.form.value as ClientReq).subscribe({
      next: (id) => {
        console.log(id);
        this.toastr.success('Cliente creado correctamente');
        this.modalService.close(true);
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error.message);
      }
    });
  }

}
