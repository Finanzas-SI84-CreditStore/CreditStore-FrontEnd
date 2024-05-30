import { Component } from '@angular/core';
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
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



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
    MatDialogModule, MatButtonModule,AddPaymentComponent,FormsModule,HttpClientModule
  ],
  templateUrl: './the-create-account.component.html',
  styleUrls: ['./the-create-account.component.css'],
  providers: [ HttpClientModule,UserService]

})
export class TheCreateAccountComponent {
  registerForm: FormGroup;
  hide = true;
  passwordUpperCaseValid = false;
  passwordSpecialCharValid = false;
  passwordNumberValid = false;
  passwordsMatch = false;
  passwordNeutral = true;

  constructor(private fb: FormBuilder,public dialog: MatDialog, private userService:UserService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.updatePasswordRequirements();
    });

    this.registerForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.passwordsMatch = this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
    });
  }

  passwordValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      this.passwordNeutral = false;
      this.passwordUpperCaseValid = hasUpperCase;
      this.passwordNumberValid = hasNumber;
      this.passwordSpecialCharValid = hasSpecialChar;

      const valid = hasUpperCase && hasNumber && hasSpecialChar;
      return !valid ? { passwordStrength: true } : null;
    };
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    const passwordsMatch = password === confirmPassword;

    if (passwordsMatch) {
      this.passwordsMatch = true;
      return null;
    } else {
      this.passwordsMatch = false;
      return { passwordsDoNotMatch: true };
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // handle the form submission
      console.log("Form data:", this.registerForm.value);
      this.userService.createUser(this.registerForm.getRawValue() as UserReq).subscribe({

        next:id=>{
          console.log("Se imprimió correctamente");
        },
        error:error=>{
          console.log("Error:",error);
        }
      })
        
      
    } else {
      console.error("Form is invalid");
    }
  }

  updatePasswordRequirements(): void {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl) {
      passwordControl.updateValueAndValidity({ onlySelf: true });
    }
    this.passwordsMatch = this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }



  openAddPaymentDialog(): void {
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo fue cerrado');
 
    });
  }

createUser():void{

}



}
