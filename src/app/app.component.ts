import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheLoginPageComponent } from './features/the-login-page/the-login-page.component';
import { TheCreateAccountComponent } from './features/the-create-account/the-create-account.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheLoginPageComponent,TheCreateAccountComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreditStore-FrontEnd';
}
