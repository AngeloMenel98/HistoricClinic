import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { Patient } from '@models/patient/patient';
import { AutoCompleteService } from '@services/autocomplete/autocomplete.service';
import { PatientService } from '@services/patient/patient.service';
import { catchError, Observable, of, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-appoint',
  imports: [
    AsyncPipe,
    MatAutocompleteModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-appoint.component.html',
  styleUrl: './add-appoint.component.scss',
})
export class AddAppointComponent implements OnInit {
  form!: FormGroup;
  data: any = inject(MAT_DIALOG_DATA);
  patients$!: Observable<Patient[]>;

  patientService = inject(PatientService);
  autocompleteService = inject(AutoCompleteService);

  patientControl = new FormControl<Patient | null>(null, Validators.required);

  filteredPatient!: Observable<Patient[]>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAppointComponent>,
  ) {}

  ngOnInit() {
    this.loadPatients();
    this.initializeForm();
    this.initializeAutocomplete();
  }

  private loadPatients() {
    this.patients$ = this.patientService.getAll().pipe(
      tap((pats: any) => console.log('Pacientes cargados:', pats)),
      catchError((error: any) => {
        console.error('Error cargando pacientes:', error);
        return of([]);
      }),
    );
  }

  private initializeAutocomplete() {
    this.filteredPatient = this.autocompleteService.createFiltered<Patient>(
      this.patientControl,
      this.patients$,
      ['name', 'lastName'],
    );
  }

  private initializeForm() {
    this.form = this.fb.group({
      patientId: ['', Validators.required],
      treatmentCode: ['', Validators.required],
      date: [this.data.selectedDate, Validators.required],
    });
  }

  displayFn(patient: Patient): string {
    return patient ? `${patient.lastName}, ${patient.name}` : '';
  }

  onPatientSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedPatient: Patient = event.option.value;

    if (selectedPatient) {
      this.form.patchValue({
        patientId: selectedPatient.id,
      });
    }

    console.log(this.form.value);
  }

  onSubmit() {}

  onCancel(): void {
    this.form.reset();

    const response = {
      status: 'canceled',
    };

    this.dialogRef.close(response);
  }
}
