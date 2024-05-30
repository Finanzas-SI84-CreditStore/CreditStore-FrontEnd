import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomePageComponent },
  // Agrega otras rutas aquí
];
