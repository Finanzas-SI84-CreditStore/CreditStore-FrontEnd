import { Component } from '@angular/core';
import { PasswordRecoveryService } from '../../services/password-recovery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LogoScreenComponent } from "../../../../public/components/logo-screen/logo-screen.component";
import { MatIcon } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-recover-code-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, LogoScreenComponent, MatIcon, RouterModule],
  templateUrl: './recover-code-page.component.html',
  styleUrls: ['./recover-code-page.component.css']
})
export class RecoverCodePageComponent {
  otp: number = 0;
  email: string = 'jenniespinoza2002@hotmail.com'; // Obtén el correo electrónico desde el componente anterior


  constructor(private passwordRecoveryService: PasswordRecoveryService) { }

  verifyOtp() {
    this.passwordRecoveryService.verifyOtp(this.otp, this.email).subscribe(
      response => {
        console.log('Código OTP verificado');
        // Realiza cualquier acción adicional después de verificar el código OTP
      },
      error => {
        console.error('Error al verificar el código OTP', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }


}
