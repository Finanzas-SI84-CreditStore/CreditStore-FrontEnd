import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../public/components/navbar/navbar.component";
import { NgForOf, CommonModule } from '@angular/common';
import { Payment } from './model/pay';
import { UserService } from '../clients/services/user.service';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { FormsModule } from '@angular/forms';
import { paymentService } from './service/payment.service';

@Component({
  selector: 'app-payments',
  standalone: true,
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  imports: [
    NavbarComponent,
    NgForOf,
    CommonModule,
    FormsModule
  ]
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] = [];
  filteredPayments: Payment[] = [];
  accountId: string = "";
  startDate: string = "";
  endDate: string = "";

  constructor(
    private paymentService: paymentService,
    private sessionStorageService: SessionStorageService
  ){}

  ngOnInit() {
    this.accountId = this.sessionStorageService.getItem('accountId');
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getpaysofaccount(this.accountId).subscribe(
      (response: Payment[]) => {
        this.payments = response;
       this.filteredPayments = response;
      });
  }

  filterPayments() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      this.filteredPayments = this.payments.filter(payment => {
        const paymentDate = new Date(payment.date);
        return paymentDate >= start && paymentDate <= end;
      });
    } else {
      this.filteredPayments = this.payments; // Mostrar todos los pagos si no hay filtros
    }
  }
}
