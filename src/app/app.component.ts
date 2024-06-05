import {Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheLoginPageComponent } from './features/the-login-page/the-login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AddAccountPageComponent} from "./features/account/pages/add-account-page/add-account-page.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheLoginPageComponent, HttpClientModule, AddAccountPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreditStore-FrontEnd';
}
