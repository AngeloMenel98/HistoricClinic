import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loadingProviders = {
    google: false,
  };

  error: string | null = null;
  constructor(private authService: AuthService, private router: Router) {}

  get loading(): boolean {
    return Object.values(this.loadingProviders).some((v) => v);
  }

  async loginWithGoogle() {
    await this.handleLogin('google', () => this.authService.login());
  }

  private async handleLogin(
    provider: 'google',
    loginFn: () => Promise<void>
  ): Promise<void> {
    this.error = null;
    this.loadingProviders[provider] = true;

    try {
      await loginFn();
      await this.router.navigate(['/dashboard']);
    } catch (error) {
      this.error = this.getErrorMessage(error);
    } finally {
      this.loadingProviders[provider] = false;
    }
  }

  private getErrorMessage(error: any): string {
    if (error.error_description) {
      return error.error_description;
    }

    if (error.status === 401) {
      return 'Autenticación fallida. Por favor intenta nuevamente.';
    }

    return 'Ocurrió un error inesperado. Intenta más tarde.';
  }
}
