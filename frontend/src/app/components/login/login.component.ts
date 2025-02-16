import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { SnackBarService } from '@services/snackBar/snack-bar.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinner,
    RouterLink,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly snackBarService = inject(SnackBarService);

  constructor(private router: Router) {}

  isLoading = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login() {
    const username = this.loginForm.value.username || '';
    const password = this.loginForm.value.password || '';

    if (!username || !password) {
      return this.snackBarService.open(
        'Ingrese nombre de usuario y contraseña'
      );
    }

    this.isLoading = true;
    this.authService.logIn({ username, password }).subscribe({
      next: (data) => {
        if (data.token) {
          this.authService.logInAndSaveToken(data.token);

          this.router.navigate(['']);
        }
      },
      error: (e) => {
        this.loginForm.reset();
        this.snackBarService.open('No se pudo iniciar sesión', e);
        this.isLoading = false;
      },
    });
  }
}
