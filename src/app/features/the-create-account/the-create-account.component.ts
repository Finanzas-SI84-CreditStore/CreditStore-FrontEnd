import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { LogoScreenComponent } from '../../public/components/logo-screen/logo-screen.component';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentComponent } from '../add-payment/add-payment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { UserService } from '../clients/services/user.service';
import { UserReq } from '../clients/models/user-req';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-create-account',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    LogoScreenComponent,
    MatDialogModule,
    MatButtonModule,
    AddPaymentComponent,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './the-create-account.component.html',
  styleUrls: ['./the-create-account.component.css'],
  providers: [HttpClientModule, UserService]
})
export class TheCreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  passwordUpperCaseValid = false;
  passwordSpecialCharValid = false;
  passwordNumberValid = false;
  passwordLowerCaseValid = false;
  passwordsMatch?: boolean;
  passwordNeutral = true;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.registerForm.valueChanges.subscribe(() => {
      this.updatePasswordRequirements();
      this.updatePasswordMatch();
    });
  }

  ngOnInit(): void {
    if (this.showSuccessMessage) {
      setTimeout(() => this.showSuccessMessage = false, 3000);
    }

    if (this.showErrorMessage) {
      setTimeout(() => this.showErrorMessage = false, 3000);
    }
  }

  passwordValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!control.touched) return null;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);

      this.passwordNeutral = false;
      this.passwordUpperCaseValid = hasUpperCase;
      this.passwordNumberValid = hasNumber;
      this.passwordSpecialCharValid = hasSpecialChar;
      this.passwordLowerCaseValid = hasLowerCase;

      const valid = hasUpperCase && hasNumber && hasSpecialChar && hasLowerCase;
      return !valid ? { passwordStrength: true } : null;
    };
  }

  passwordMatchValidator = (group: AbstractControl): ValidationErrors | null => {
    if (!group.get('password')?.touched || !group.get('confirmPassword')?.touched) return null;
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    const passwordsMatch = password === confirmPassword;
    return !passwordsMatch ? { passwordsDoNotMatch: true } : null;
  }

  updatePasswordMatch(): void {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    this.passwordsMatch = password === confirmPassword && this.registerForm.get('confirmPassword')?.touched;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.createUser(this.registerForm.getRawValue() as UserReq).subscribe({
        next: id => {
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
          this.registerForm.reset();

          this.router.navigate(['inicio']);
        },
        error: error => {
          console.log("Error:", error);
          this.showErrorMessage = true;
          this.showSuccessMessage = false;
        }
      });
    } else {
      console.error("Form is invalid");
    }
  }

  updatePasswordRequirements(): void {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl) {
      passwordControl.updateValueAndValidity({ onlySelf: true });
    }
  }

  openAddPaymentDialog(): void {
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo fue cerrado');
    });
  }

  navigateToInicio() {
    this.router.navigate(['inicio']);
  }
}
