import { Routes } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { LoginGuard } from './guards/isLogged.guard';
import { AdminGuard } from './guards/isAdmin.guard';
import { PatientComponent } from '@components/patient/patient.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { LayoutComponent } from '@components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // ... otras rutas
    ],
  },
];
