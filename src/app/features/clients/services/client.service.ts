// client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  createClient(userId: string, client: Client): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userId}/clients`, client);
  }
}
