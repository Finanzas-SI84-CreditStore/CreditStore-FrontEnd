import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import {AddCustomerComponent} from "./features/clients/components/add-customer/add-customer.component";
import {
  RecoverPasswordPageComponent
} from "./features/recover-password/pages/recover-password-page/recover-password-page.component";
import {
  CreateNewPasswordPageComponent
} from "./features/recover-password/pages/create-new-password-page/create-new-password-page.component";
import {
  RecoverCodePageComponent
} from "./features/recover-password/pages/recover-code-page/recover-code-page.component";

export const routes: Routes = [
  { path: '', redirectTo: 'recover-password', pathMatch: 'full' },
  { path: 'inicio', component: HomePageComponent },
  { path: 'add-client', component: AddCustomerComponent },
  { path: 'recover-code', component: RecoverCodePageComponent },
  { path: 'change-password', component: CreateNewPasswordPageComponent },
  { path: 'recover-password', component: RecoverPasswordPageComponent },
  { path: 'crear-contrasena', component: CreateNewPasswordPageComponent }
  // Agrega otras rutas aquí
];
