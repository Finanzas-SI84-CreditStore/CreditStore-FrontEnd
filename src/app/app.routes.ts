import { Routes } from '@angular/router';
import { TheLoginPageComponent } from './features/the-login-page/the-login-page.component';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { AddCustomerComponent } from './features/clients/components/add-customer/add-customer.component';
import { RecoverPasswordPageComponent } from './features/recover-password/pages/recover-password-page/recover-password-page.component';
import { CreateNewPasswordPageComponent } from './features/recover-password/pages/create-new-password-page/create-new-password-page.component';
import { RecoverCodePageComponent } from './features/recover-password/pages/recover-code-page/recover-code-page.component';
import { AddPaymentComponent } from './features/add-payment/add-payment.component';
import { TheCreateAccountComponent } from './features/the-create-account/the-create-account.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: TheLoginPageComponent },
  { path: 'dashboard', component: HomePageComponent },
  { path: 'addClient', component: HomePageComponent },
  { path: 'add-client', component: AddCustomerComponent },
  { path: 'recover-code', component: RecoverCodePageComponent },
  { path: 'change-password', component: CreateNewPasswordPageComponent },
  { path: 'recover-password', component: RecoverPasswordPageComponent },
  { path: 'crear-contrasena', component: CreateNewPasswordPageComponent },
  { path: 'addPayment', component: AddPaymentComponent },
  { path: 'createAccount', component: TheCreateAccountComponent },
];
