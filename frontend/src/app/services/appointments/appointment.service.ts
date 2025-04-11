import { Injectable } from '@angular/core';
import { Appointment } from '@models/appointment';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private mockData: Appointment[] = [
    {
      date: new Date('2025-04-15T09:00:00'),
      patientName: 'Juan',
      patientLastName: 'Pérez',
      treatmentCode: 'TR-145',
    },
    {
      date: new Date('2025-04-15T11:30:00'),
      patientName: 'María',
      patientLastName: 'Gómez',
      treatmentCode: 'TR-178',
    },
    {
      date: new Date('2025-03-16T14:00:00'),
      patientName: 'Carlos',
      patientLastName: 'López',
      treatmentCode: 'TR-162',
    },
    {
      date: new Date('2025-09-30T17:00:00'),
      patientName: 'Ana',
      patientLastName: 'Martínez',
      treatmentCode: 'TR-199',
    },
  ];

  getAppointments(): Observable<Appointment[]> {
    return of(this.mockData).pipe(delay(500));
  }
}
