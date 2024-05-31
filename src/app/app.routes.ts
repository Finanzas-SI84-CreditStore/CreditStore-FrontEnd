import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import {AddCustomerComponent} from "./features/clients/components/add-customer/add-customer.component";

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomePageComponent },
  // Agrega otras rutas aquí
];
