import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dentist } from '@models/dentist/dentist';
import { environment } from 'environment/enviornment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DentistService {
  private readonly http = inject(HttpClient);
  private apiURL = environment.apiURL;

  getAll(): Observable<Dentist[]> {
    return this.http.get<Dentist[]>(`${this.apiURL}/dentists`);
  }

  saveDentist(data: any): Observable<Dentist> {
    return this.http.post<Dentist>(`${this.apiURL}/dentists`, data);
  }
}
