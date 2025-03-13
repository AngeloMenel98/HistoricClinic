import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { formatDateTime } from '@helpers/date.helper';

import { Patient } from '@models/patient/patient';
import { AuthService } from '@services/auth/auth.service';
import { PatientService } from '@services/patient/patient.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { AddPatientComponent } from './modals/add-patient/add-patient.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patient',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  authService = inject(AuthService);
  patientService = inject(PatientService);
  matDialog = inject(MatDialog);

  form!: FormGroup;

  filteredPatients: Patient[] = [
    {
      id: 'PAT-001',
      name: 'María',
      lastName: 'López',
      dni: '32456789',
      occupation: 'Enfermera',
      birthDate: new Date('1978-03-15'),
      createdAt: new Date('2023-01-10'),
    },
    {
      id: 'PAT-002',
      name: 'Pedro',
      lastName: 'Perez',
      dni: '32456789',
      occupation: 'Plomero',
      birthDate: new Date('1978-03-16'),
      createdAt: new Date('2023-01-10'),
    },
  ];

  patients: Patient[] = [];

  displayedColumns = [
    'fullName',
    'dni',
    'birthDate',
    'occupation',
    'createdAt',
    'actions',
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadPatients();

    this.form = this.fb.group({
      search: new FormControl(''),
    });

    this.form
      .get('search')!
      .valueChanges.pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((value) => this.filterPatients(value)),
      )
      .subscribe();
  }

  private filterPatients(searchTerm: string): void {
    if (searchTerm) {
      const lowCaseTerm = searchTerm.toLowerCase();
      this.filteredPatients = this.patients.filter(
        (pat) =>
          pat.lastName.toLowerCase().includes(lowCaseTerm) ||
          pat.name.toLowerCase().includes(lowCaseTerm),
      );
    } else {
      this.filteredPatients = [];
    }
  }

  private loadPatients() {
    this.patientService.getAll().subscribe({
      next: (data: Patient[]) => {
        this.patients = data;
      },
      error: (e) => {},
    });
  }

  openAddPatient() {
    this.router.navigate(['/addPatient']);
  }

  onMenuItemClick(arg0: string, _t116: any) {
    throw new Error('Method not implemented.');
  }

  formatDateTime(date: string) {
    return date ? formatDateTime(date) : '-';
  }
}
