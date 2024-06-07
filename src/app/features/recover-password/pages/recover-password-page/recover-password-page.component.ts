import { Component } from '@angular/core';
import { PasswordRecoveryService } from '../../services/password-recovery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LogoScreenComponent } from "../../../../public/components/logo-screen/logo-screen.component";
import { RouterModule } from "@angular/router";
import {EmailService} from "../../services/email.service";

@Component({
  selector: 'app-recover-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, LogoScreenComponent, RouterModule],
  templateUrl: './recover-password-page.component.html',
  styleUrls: ['./recover-password-page.component.css']
})
export class RecoverPasswordPageComponent {
  email: string = '';

  constructor(
    private passwordRecoveryService: PasswordRecoveryService,
    private emailService: EmailService
    ) { }

  verifyEmail() {
    this.emailService.setEmail(this.email);
    console.log('Correo electrónico guardado en el servicio:', this.email);
    this.passwordRecoveryService.verifyEmail(this.email).subscribe(
      response => {
        console.log('Correo electrónico verificado');
        // Realiza cualquier acción adicional después de verificar el correo electrónico
      },
      error => {
        console.error('Error al verificar el correo electrónico', error);
        // Maneja el error de acuerdo a tus necesidades

      }
    );
  }
}
