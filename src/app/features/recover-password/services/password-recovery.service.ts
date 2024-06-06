import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  verifyEmail(email: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify-mail/${email}`, null).pipe(
      catchError(this.handleError)
    );
  }

  verifyOtp(otp: number, email: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify/${otp}/${email}`, null).pipe(
      catchError(this.handleError)
    );
  }

  changePassword(email: string, changePasswordReq: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/change-password/${email}`, changePasswordReq).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Ha ocurrido un error', error);
    return throwError(error);
  }
}
