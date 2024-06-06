// client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { ClientQuery } from '../models/client-query';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  createClient(userId: string, client: Client): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userId}/clients`, client);
  }

  getAllClientsByUser(userId: string): Observable<ClientQuery[]> {
    return this.http.get<ClientQuery[]>(`${this.apiUrl}/users/${userId}/clients`);
  }

  getAllBiggestDebtorsByUser(userId: string): Observable<ClientQuery[]> {
    return this.http.get<ClientQuery[]>(`${this.apiUrl}/users/${userId}/clients/debtors`);
  }
}
