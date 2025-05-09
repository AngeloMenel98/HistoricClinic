import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Appointment, CreateAppoint } from '@models/appointments/appointment';
import { environment } from 'environment/enviornment.dev';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private readonly http = inject(HttpClient);
  private apiURL = environment.apiURL;

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiURL}/appointments`);
  }

  createAppoint(data: CreateAppoint): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiURL}/appointments`, data);
  }
}
