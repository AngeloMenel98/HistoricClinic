import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '@services/patient/patient.service';
import { SnackBarService } from '@services/snackBar/snack-bar.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent {
  form: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private snackBarService: SnackBarService,
  ) {
    const patientData = this.route.snapshot.data['patient'];
    this.form = this.initForm(patientData);
  }

  private initForm(patientData?: any): FormGroup {
    return this.fb.group({
      name: [
        patientData?.name || '',
        [Validators.required, Validators.minLength(2)],
      ],
      lastName: [
        patientData?.lastName || '',
        [Validators.required, Validators.minLength(2)],
      ],
      dni: [
        patientData?.dni || '',
        [Validators.required, Validators.pattern(/^\d{8}$/)],
      ],
      cuit: [patientData?.cuit || '', Validators.pattern(/^\d{11}$/)],
      birthDate: [patientData?.birthDate || null, Validators.required],
      occupation: [patientData?.occupation || '', Validators.maxLength(50)],
      address: [patientData?.address || '', Validators.maxLength(100)],
      phoneNumber: [
        patientData?.phoneNumber || '',
        [Validators.required, Validators.pattern(/^\d{10,15}$/)],
      ],
      email: [
        patientData?.email || '',
        [Validators.required, Validators.email],
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    const patientData = this.form.value;

    this.patientService.savePatient(patientData).subscribe({
      next: () => {
        this.snackBarService.open('Paciente guardado exitosamente');
        this.router.navigate(['/patient']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage =
          err.error?.message || 'Error inesperado al guardar el paciente';
        console.error('Error saving patient:', err);
      },
      complete: () => (this.isLoading = false),
    });
  }

  onCancel() {
    this.router.navigate(['patient']);
  }
}
