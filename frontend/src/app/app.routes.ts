import { Routes } from '@angular/router';
import { LoginComponent } from './modules/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: '**', // Ruta comodín para páginas no encontradas
    redirectTo: '',
  },
];
