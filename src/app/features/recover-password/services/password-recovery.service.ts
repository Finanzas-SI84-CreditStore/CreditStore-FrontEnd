import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {
  private apiUrl = 'http://localhost:8080/api'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  verifyEmail(email: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify-mail/${email}`, null);
  }

  verifyOtp(otp: number, email: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify/${otp}/${email}`, null);
  }

  changePassword(email: string, changePasswordReq: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/change-password/${email}`, changePasswordReq);
  }
}
