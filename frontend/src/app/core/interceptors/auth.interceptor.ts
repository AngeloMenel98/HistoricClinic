import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const oauth = inject(OAuthService);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${oauth.getAccessToken()}`,
    },
  });

  return next(authReq);
};
