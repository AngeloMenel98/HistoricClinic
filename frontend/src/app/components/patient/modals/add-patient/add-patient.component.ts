// add-patient.component.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '@services/patient/patient.service';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss',
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
  ) {
    const patientData = this.route.snapshot.data['patient'];
    this.form = this.initForm(patientData);
  }

  private initForm(patientData?: any): FormGroup {
    return this.fb.group({
      basicInfo: this.fb.group({
        name: [patientData?.name || '', Validators.required],
        lastName: [patientData?.lastName || '', Validators.required],
        dni: [
          patientData?.dni || '',
          [Validators.required, Validators.pattern(/^\d{8}$/)],
        ],
        cuit: [patientData?.cuit || ''],
        birthDate: [patientData?.birthDate || null, Validators.required],
        occupation: [patientData?.occupation || ''],
        address: [patientData?.address || ''],
        phone: [
          patientData?.phone || '',
          [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
        ],
        email: [
          patientData?.email || '',
          [Validators.required, Validators.email],
        ],
      }),
      additionalInfo: this.fb.group({
        bloodPressure: [''],
        medications: [''],

        liverProblems: [''],
        infDiseases: [''],
        medicalConds: [''],
        operations: [''],
        smokingHistory: [''],
      }),
    });
  }

  // Getter para el FormGroup de información básica
  get basicInfoForm(): FormGroup {
    return this.form.get('basicInfo') as FormGroup;
  }

  // Getter para el FormGroup de información adicional
  get medicHistForm(): FormGroup {
    return this.form.get('additionalInfo') as FormGroup;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      const patientData = {
        ...this.form.value.basicInfo,
        ...this.form.value.additionalInfo,
      };

      this.patientService.savePatient(patientData).subscribe({
        next: () => {
          this.router.navigate(['/patient'], {
            state: { successMessage: 'Paciente guardado exitosamente' },
          });
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = 'Error al guardar: ' + err.message;
        },
      });
    }
  }
}
