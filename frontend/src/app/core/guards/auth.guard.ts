import { inject } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const oauth = inject(OAuthService);

  return oauth.events.pipe(
    filter((e) => e.type == 'token_expires'),
    map(() => oauth.hasValidAccessToken())
  );
};
