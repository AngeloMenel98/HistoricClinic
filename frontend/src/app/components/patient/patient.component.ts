import { Component, inject, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { Patient } from '@models/patient/patient';
import { AuthService } from '@services/auth/auth.service';
import { PatientService } from '@services/patient/patient.service';

@Component({
  selector: 'app-patient',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTableModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  authService = inject(AuthService);
  patientService = inject(PatientService);

  patients: Patient[] = [];

  displayedColumns = [
    'fullName',
    'dni',
    'birthDate',
    'occupation',
    'createdAt',
    'actions',
  ];

  ngOnInit(): void {
    this.loadPatients();
  }

  private loadPatients() {
    this.patientService.getAll().subscribe({
      next: (data: Patient[]) => {
        this.patients = data;
      },
      error: (e) => {},
    });
  }
}
