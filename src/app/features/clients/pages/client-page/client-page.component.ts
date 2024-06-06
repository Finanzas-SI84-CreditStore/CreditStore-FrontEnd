import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ClientQuery } from '../../models/client-query';
import {NavbarComponent} from "../../../../public/components/navbar/navbar.component";
import {DatePipe, NgForOf, SlicePipe} from "@angular/common";

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
  userId: string = '1f39b2df-b4e3-446e-ad1a-6922d4b7a235'; // Reemplaza con el ID del usuario actual

  // Propiedades para la paginación
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number = 0;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClientsByUser(this.userId).subscribe(
      (response: ClientQuery[]) => {
        this.clients = response;
        this.totalItems = response.length;
      },
      (error) => {
        console.error('Error al obtener los clientes', error);
      }
    );
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = +event.target.value;
    this.currentPage = 1;
  }

  exportClients() {
    // Lógica para exportar los clientes a un archivo
    console.log('Exportar clientes');
  }

  protected readonly Math = Math;
}
