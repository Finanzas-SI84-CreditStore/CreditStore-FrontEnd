import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ClientQuery } from '../../models/client-query';
import { NavbarComponent } from "../../../../public/components/navbar/navbar.component";
import { DatePipe, NgForOf, SlicePipe } from "@angular/common";
import { SessionStorageService } from '../../../../shared/services/session-storage.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    SlicePipe,
    DatePipe,
    NgForOf
  ],
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  clients: ClientQuery[] = [];
  userId: string = ''; 
  toastr: any;

  constructor(
    private clientService: ClientService,
    private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {
    this.userId = this.sessionStorageService.getItem('userId');
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClientsByUser(this.userId).subscribe(
      (response: ClientQuery[]) => {
        this.clients = response;
        console.log('Clientes recibidos:', this.clients);
      },
      (error) => {
        this.toastr.error(error.message)
      }
    );
  }

  exportClients() {
    console.log('Exportar clientes');
  }
}
