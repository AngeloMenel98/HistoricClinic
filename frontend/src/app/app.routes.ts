import { Routes } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { LoginGuard } from './guards/isLogged.guard';
import { PatientComponent } from '@components/patient/patient.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { LayoutComponent } from '@components/layout/layout.component';
import { AddPatientComponent } from '@components/patient/modals/add-patient/add-patient.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient', component: PatientComponent },
      {
        path: 'addPatient',
        component: AddPatientComponent,
      },
    ],
  },
];
