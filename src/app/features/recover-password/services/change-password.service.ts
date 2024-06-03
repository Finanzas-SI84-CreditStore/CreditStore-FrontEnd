import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  private apiUrl = 'http://localhost:8000/api/change-password';

  constructor(private http: HttpClient) { }

  changePassword(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
