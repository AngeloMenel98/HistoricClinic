import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '@enums/role';
import { AuthService } from '@services/auth/auth.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.role;

  if (userRole == Role.ADMIN) {
    return true;
  }

  return false;
};
