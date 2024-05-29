import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheLoginPageComponent } from './features/the-login-page/the-login-page.component';
import { TheAddAccountPageComponent } from './features/the-add-account-page/the-add-account-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheLoginPageComponent, TheAddAccountPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreditStore-FrontEnd';
}
