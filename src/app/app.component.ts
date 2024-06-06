import {Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { TheLoginPageComponent } from './features/the-login-page/the-login-page.component';
import { TheCreateAccountComponent } from './features/the-create-account/the-create-account.component';
import { HttpClientModule } from '@angular/common/http';
import {AddCustomerComponent} from "./features/clients/components/add-customer/add-customer.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheLoginPageComponent,TheCreateAccountComponent, NavbarComponent,HomePageComponent, AddCustomerComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreditStore-FrontEnd';
}
