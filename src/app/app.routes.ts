import { Routes } from '@angular/router';
import { TheLoginPageComponent } from './features/the-login-page/the-login-page.component';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { AddCustomerComponent } from './features/clients/components/add-customer/add-customer.component';
import { AddPaymentComponent } from './features/add-payment/add-payment.component';
import { TheCreateAccountComponent } from './features/the-create-account/the-create-account.component';
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: TheLoginPageComponent },
  { path: 'dashboard', component: HomePageComponent },
  { path: 'addClient', component: AddCustomerComponent },
  { path: 'addPayment', component: AddPaymentComponent },
  { path: 'createAccount', component: TheCreateAccountComponent },
];
