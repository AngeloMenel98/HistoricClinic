import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  opened = false;
  isLoggedIn = false;
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      if (this.authService.expiredSession()) {
        this.authService.logOut();
        this.redirectToLogin();
      }
    }
    this.authService.message$.subscribe({
      next: (data) => {
        this.isLoggedIn = data;
      },
    });
  }

  private redirectToLogin(): void {
    this.router.navigate(['/login']); // Método de redirección
  }
}
