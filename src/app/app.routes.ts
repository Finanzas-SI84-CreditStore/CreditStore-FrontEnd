import { Routes } from '@angular/router';
import { TheLoginPageComponent } from './features/auth/pages/the-login-page/the-login-page.component';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
<<<<<<< HEAD
import { AddCustomerComponent } from './features/clients/components/add-customer/add-customer.component';
import { AddPaymentComponent } from './features/add-payment/add-payment.component';
import { TheCreateAccountComponent } from './features/the-create-account/the-create-account.component';
import { MonthlyIncomeComponent } from './features/home/pages/monthly-income/monthly-income.component';
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: TheLoginPageComponent },
  { path: 'dashboard', component: HomePageComponent },
  { path: 'addClient', component: AddCustomerComponent },
  { path: 'addPayment', component: AddPaymentComponent },
  { path: 'createAccount', component: TheCreateAccountComponent },
  { path: 'montlyincome', component: MonthlyIncomeComponent },
=======
import { RecoverPasswordPageComponent } from './features/auth/pages/recover-password-page/recover-password-page.component';
import { CreateNewPasswordPageComponent } from './features/auth/pages/create-new-password-page/create-new-password-page.component';
import { RecoverCodePageComponent } from './features/auth/pages/recover-code-page/recover-code-page.component';
import { AddPaymentComponent } from './features/credits/components/add-payment/add-payment.component';
import { TheCreateAccountComponent } from './features/auth/pages/the-create-account/the-create-account.component';
import { AddAccountPageComponent } from './features/account/pages/add-account-page/add-account-page.component';
import { ClientPageComponent } from './features/clients/pages/client-page/client-page.component';
import { ChangeProfileComponent } from './features/auth/components/change-profile/change-profile.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: TheLoginPageComponent },
  { path: 'panel', component: HomePageComponent },
  { path: 'clientes', component: ClientPageComponent },
  { path: 'recover-code', component: RecoverCodePageComponent },
  { path: 'change-password', component: CreateNewPasswordPageComponent },
  { path: 'recover-password', component: RecoverPasswordPageComponent },
  { path: 'create-password', component: CreateNewPasswordPageComponent },
  { path: 'add-payment', component: AddPaymentComponent },
  { path: 'create-account', component: TheCreateAccountComponent },
  { path: 'add-account', component: AddAccountPageComponent },
  { path: 'change-profile', component: ChangeProfileComponent }
>>>>>>> 35e3d38e28771ee7d6fa1fb2c1d8850c3603851a
];
