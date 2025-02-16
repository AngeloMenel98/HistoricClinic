import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from '../sidebar/sidebar.component';
import { ConfirmationComponent } from '@components/shared/confirmation/confirmation.component';

@Component({
  selector: 'app-toolbar',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    SideBarComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolBarComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);

  opened = false;

  isLoggedIn!: boolean;

  username = ' ';
  isLoading = false;
  route = '/';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.username = this.authService.userName;
    }
    this.authService.message$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  logOut() {
    this.isLoading = true;
    this.dialog
      .open(ConfirmationComponent, { data: { title: '¿Cerrar sesión?' } })
      .afterClosed()
      .subscribe({
        next: (data) => {
          if (data?.isConfirmed) {
            this.authService.logOut();

            this.router.navigate(['']);
          }
          this.isLoading = false;
        },
      });
  }

  get title() {
    const titles: { [key: string]: string } = {
      '/vehiculos': 'Vehículos',
      '/personas': 'Personas',
    };

    return titles[this.router.url];
  }
}
