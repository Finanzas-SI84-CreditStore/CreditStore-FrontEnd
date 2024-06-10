import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [ MatDialogModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,],
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent {
  paymentDate: Date = new Date();
  amount: number = 0;

  constructor(public dialogRef: MatDialogRef<AddPaymentComponent>) {}

  onAddClick(): void {
    console.log('Fecha de Pago:', this.paymentDate);
    console.log('Monto:', this.amount);
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
