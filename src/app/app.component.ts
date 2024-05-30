import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, NavbarComponent],
  template: `
    <div class="container">
      <app-navbar></app-navbar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      height: 100vh;
    }
    .content {
      flex: 1;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'CreditStore-FrontEnd';
}
