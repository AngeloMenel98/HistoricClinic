import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { environment } from 'environment/enviornment.dev';
import { catchError, Observable, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof window === 'undefined') return next(req);
  if (!req.url.startsWith(environment.apiURL)) return next(req);

  const authService = inject(AuthService);
  const router = inject(Router);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.token}`,
    },
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logOut();
        router.navigate(['login']);
      }
      return throwError(() => error);
    })
  );
};
