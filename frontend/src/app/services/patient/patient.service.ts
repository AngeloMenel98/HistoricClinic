import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Patient } from '@models/patient/patient';
import { environment } from 'environment/enviornment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly http = inject(HttpClient);
  private apiURL = environment.apiURL;

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiURL}/patients`);
  }

  savePatient(patientData: any): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiURL}/patients`, patientData);
  }
}
