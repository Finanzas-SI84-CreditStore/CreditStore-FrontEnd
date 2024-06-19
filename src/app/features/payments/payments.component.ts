import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../public/components/navbar/navbar.component";
import { NgForOf, CommonModule } from '@angular/common';
import { Payment } from '../clients/models/pay';
import { UserService } from '../clients/services/user.service';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { FormsModule } from '@angular/forms';

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
  userId: string = "";
  startDate: string = "";
  endDate: string = "";

  constructor(
    private userservice: UserService,
    private sessionStorageService: SessionStorageService
  ){}

  ngOnInit() {
    this.userId = this.sessionStorageService.getItem('userId');
    this.getPayments();
  }

  getPayments() {
    this.userservice.getpayments(this.userId).subscribe(
      (response: Payment[]) => {
        this.payments = response;
        this.filteredPayments = response; // Inicialmente muestra todos los pagos
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
