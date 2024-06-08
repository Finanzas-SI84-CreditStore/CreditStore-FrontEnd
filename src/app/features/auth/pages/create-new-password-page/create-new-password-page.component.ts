import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LogoScreenComponent } from "../../../../public/components/logo-screen/logo-screen.component";
import { MatIcon } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { ChangePasswordReqModel } from '../../models/change-password-req.model';
import { EmailService } from '../../services/email.service';
import { PasswordRecoveryService } from '../../services/password-recovery.service';

@Component({
  selector: 'app-create-new-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, LogoScreenComponent, MatIcon, RouterModule],
  templateUrl: './create-new-password-page.component.html',
  styleUrls: ['./create-new-password-page.component.css']
})
export class CreateNewPasswordPageComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  email: string = '';

  constructor(
    private passwordRecoveryService: PasswordRecoveryService,
    private emailService: EmailService
  ) {
    this.email = emailService.getEmail();
    console.log('Correo electrónico obtenido del servicio:', this.email); // Agrega este registro
  }

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      const changePasswordReq = {
        password: this.newPassword,
        newPassword: this.newPassword
      };
      this.passwordRecoveryService.changePassword(this.email, changePasswordReq as ChangePasswordReqModel).subscribe(
        response => {
          console.log('Contraseña cambiada exitosamente');
          // Realiza cualquier acción adicional después de cambiar la contraseña
        },
        error => {
          console.error('Error al cambiar la contraseña', error);

        }
      );
    } else {
      console.error('Las contraseñas no coinciden');

    }
  }
}
