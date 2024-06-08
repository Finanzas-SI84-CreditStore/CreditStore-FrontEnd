import { FormClientAccountComponent } from '../../../clients/components/form-client-account/form-client-account.component';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CurrencyPipe, DecimalPipe,CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { Client } from '../../models/client.model';
import { NavbarComponent } from "../../../../public/components/navbar/navbar.component";
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [CommonModule,MatButtonModule, MatIconModule, AsyncPipe, CurrencyPipe, DecimalPipe, NavbarComponent]
})
export class HomePageComponent implements OnInit {
  clients: Client[] = [];
  interest: number = 0;
  username: string = '';


  constructor(private homeService: HomeService, private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getClients();
    this.getInterest();
    this.getUsername();
  }

  getClients(): void {
    this.homeService.getClients().subscribe(
      clients => this.clients = clients
    );
  }

  getInterest(): void {
    this.homeService.getInterest().subscribe(
      interest => this.interest = interest
    );
  }

  getUsername(): void {
    this.homeService.getUsername().subscribe(
      username => this.username = username
    );
  }

  navigateToAddAccount() {
    this.router.navigate(['/add-account']);
  }
  navigateToAddClient() {
    this.router.navigate(['/add-client']);
  }

  openFormClientAccount(): void {
    const modalRef: NgbModalRef = this.modalService.open(FormClientAccountComponent,
      { size: 'lg', centered: true, backdrop: 'static' });
  }

}
