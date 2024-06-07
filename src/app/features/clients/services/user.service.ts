import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UserReq } from '../models/user-req';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
const injector = Injector.create({
  providers: [
    { provide: HttpClient, deps: [], useClass: HttpClientModule },
  ],
});
@Injectable({
  providedIn: 'root'


})
export class UserService {

  apiUrl: string = environment.baseUrl+'/users';
  constructor(public http: HttpClient) {}

  createUser(userReq:UserReq): Observable<string> {
    return this.http.post<string>(this.apiUrl,userReq);
  }
}
