
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }

  getInterest(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/interest`);
  }

  getUsername(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/username`);
  }
}
