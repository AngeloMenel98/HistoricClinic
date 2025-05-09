import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dentist } from '@models/dentist/dentist';
import { Procedure } from '@models/procedure/procedure';
import { environment } from 'environment/enviornment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcedureService {
  private readonly http = inject(HttpClient);
  private apiURL = environment.apiURL;

  getAll(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(`${this.apiURL}/procedures`);
  }

  saveProcedure(data: any): Observable<Procedure> {
    return this.http.post<Procedure>(`${this.apiURL}/procedures`, data);
  }
}
