import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

export const LoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expiredSession = authService.expiredSession();

  if (authService.isLoggedIn() && !expiredSession) {
    return true;
  }

  if (expiredSession) {
    authService.logOut();
    router.navigate(['/dashboard']);
    return false;
  }

  router.navigate(['']);
  return false;
};
