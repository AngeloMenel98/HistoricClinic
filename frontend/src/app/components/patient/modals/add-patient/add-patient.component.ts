import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';

interface PatientData {
  patient?: any;
}

@Component({
  selector: 'app-add-patient',
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

  data: PatientData;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPatientComponent>,
  ) {
    this.data = inject(MAT_DIALOG_DATA);
    this.form = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      basicInfo: this.fb.group({
        name: [this.data?.patient?.name || '', Validators.required],
        lastName: [this.data?.patient?.lastName || '', Validators.required],
        dni: [
          this.data?.patient?.dni || '',
          [Validators.required, Validators.pattern(/^\d{8}$/)],
        ],
        birthDate: [this.data?.patient?.birthDate || null, Validators.required],
        occupation: [this.data?.patient?.occupation || ''],
      }),
      additionalInfo: this.fb.group({
        address: [this.data?.patient?.address || ''],
        phone: [this.data?.patient?.phone || ''],
        email: [this.data?.patient?.email || '', Validators.email],
      }),
    });
  }

  get basicInfoForm(): FormGroup {
    return this.form.get('basicInfo') as FormGroup;
  }

  get additionalInfoForm(): FormGroup {
    return this.form.get('additionalInfo') as FormGroup;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const result = {
        ...this.form.value.basicInfo,
        ...this.form.value.additionalInfo,
      };

      if (this.data?.patient?.id) {
        result.id = this.data.patient.id;
      }

      this.dialogRef.close(result);
    }
  }
}
