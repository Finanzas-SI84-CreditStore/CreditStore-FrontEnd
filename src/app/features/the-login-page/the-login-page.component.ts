import { Component } from '@angular/core';
import { LogoScreenComponent } from '../../public/components/logo-screen/logo-screen.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-the-login-page',
  standalone: true,
  imports: [
    LogoScreenComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInput,
    MatIconModule
    ],
  templateUrl: './the-login-page.component.html',
  styleUrl: './the-login-page.component.css'
})
export class TheLoginPageComponent {
  hide=true;

  constructor(private router: Router) {}

  navigateToCreateAccount() {
    this.router.navigate(['/createAccount']);
  }

  navigateToChangePassword() {
    this.router.navigate(['/recover-password']);
  }
}
