import { AsyncPipe, CommonModule } from '@angular/common';
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
import { AppointmentService } from '@services/appointments/appointment.service';
import { DentistService } from '@services/dentist/dentist.service';
import { Dentist } from '@models/dentist/dentist';
import { Procedure } from '@models/procedure/procedure';
import { ProcedureService } from '@services/procedure/procedure.service';

@Component({
  selector: 'app-add-appoint',
  imports: [
    AsyncPipe,
    CommonModule,
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
  dentists$!: Observable<Dentist[]>;
  procedures$!: Observable<Procedure[]>;

  patientService = inject(PatientService);
  dentistService = inject(DentistService);
  procedureService = inject(ProcedureService);

  appointService = inject(AppointmentService);
  autocompleteService = inject(AutoCompleteService);

  patientControl = new FormControl<Patient | null>(null, Validators.required);
  dentistControl = new FormControl<Dentist | null>(null, Validators.required);
  procedureControl = new FormControl<Procedure | null>(
    null,
    Validators.required,
  );

  filteredPatient!: Observable<Patient[]>;
  filteredDentist!: Observable<Dentist[]>;
  filteredProcedure!: Observable<Procedure[]>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAppointComponent>,
  ) {}

  ngOnInit() {
    this.loadPatients();
    this.loadDentists();
    this.loadProcedures();
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

  private loadDentists() {
    this.dentists$ = this.dentistService.getAll().pipe(
      tap((res) => console.log('Dentistas cargados:', res)),
      catchError((err) => {
        console.error('Error cargando dentistas', err);
        return of([]);
      }),
    );
  }

  private loadProcedures() {
    this.procedures$ = this.procedureService.getAll().pipe(
      tap((res) => console.log('Tratamientos cargados:', res)),
      catchError((err) => {
        console.error('Error cargando Tratamientos', err);
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

    this.filteredDentist = this.autocompleteService.createFiltered<Dentist>(
      this.dentistControl,
      this.dentists$,
      ['name', 'lastName'],
    );

    this.filteredProcedure = this.autocompleteService.createFiltered<Procedure>(
      this.procedureControl,
      this.procedures$,
      ['codeProcedure'],
    );
  }

  private initializeForm() {
    this.form = this.fb.group({
      patientId: ['', Validators.required],
      dentistId: ['', Validators.required],
      code: ['', Validators.required],
      scheduledDate: [
        { value: this.data.selectedDate, disabled: true },
        Validators.required,
      ],
      scheduledTime: ['', Validators.required],
    });
  }

  displayFn<T extends { name: string; lastName: string }>(item: T): string {
    return item ? `${item.lastName}, ${item.name}` : '';
  }
  displayProcedure(procedure: { codeProcedure: string }): string {
    return procedure ? procedure.codeProcedure : '';
  }

  onEntitySelected<T extends { id: number }>(
    controlName: string,
    event: MatAutocompleteSelectedEvent,
  ) {
    const selected: T = event.option.value;

    if (selected) {
      this.form.patchValue({
        [controlName]: selected.id,
      });
    }
  }

  onSubmit() {
    const date: Date = this.form.get('scheduledDate')?.value;
    const time: string = this.form.get('scheduledTime')?.value;

    const combinedDateTime = new Date(date);

    if (date && time) {
      const [hours, minutes] = time.split(':').map(Number);

      combinedDateTime.setHours(hours, minutes, 0, 0);
    }

    const formData = {
      patientId: this.form.get('patientId')?.value,
      dentistId: this.form.get('dentistId')?.value,
      code: this.form.get('code')?.value,
      scheduledAt: combinedDateTime,
    };

    this.appointService.createAppoint(formData).subscribe({
      next: (saved) => {
        const res = {
          id: saved.id,
          codeProcedure: saved.codeProcedure,
          date: saved.date,
          patientName: saved.patientName,
          patientLastName: saved.patientLastName,
        };
        this.dialogRef.close(res);
      },
      error: (err) => console.error(err),
    });
  }

  onCancel(): void {
    this.form.reset();

    this.dialogRef.close();
  }
}
