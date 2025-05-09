import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Login } from '@models/auth/interceptors/login';
import { environment } from 'environment/enviornment.dev';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private apiURL = environment.apiURL;

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  message$ = this.isLoggedInSubject.asObservable();

  constructor() {
    this.isLoggedInSubject.next(!!this.token);
  }

  logIn(user: Login): Observable<{ token: string }> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<{ token: string }>(
      `${this.apiURL}/auth/login`,
      user,
      { headers },
    );
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
  }

  public logInAndSaveToken(token: string): void {
    this.saveToken(token);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  expiredSession(): boolean {
    const decodedToken: any = this.decodedToken;
    if (decodedToken && decodedToken.exp) {
      const expDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();
      if (currentDate > expDate) return true;
    }
    return false;
  }

  get token(): any {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  }

  get decodedToken(): any {
    const token = this.token;
    if (!token) return false;
    try {
      const d = jwtDecode(token);
      return d;
    } catch (e) {
      return false;
    }
  }

  get userName() {
    const decodedToken: any = this.decodedToken;
    if (!decodedToken) return '';

    return decodedToken.username;
  }

  get userId(): string | null {
    const decodedToken: any = this.decodedToken;
    if (!decodedToken || !decodedToken.uuid) return null;
    return decodedToken.id;
  }

  get role(): string | null {
    const decodedToken: any = this.decodedToken;
    if (!decodedToken || !decodedToken.role) return null;
    return decodedToken.role;
  }
}
