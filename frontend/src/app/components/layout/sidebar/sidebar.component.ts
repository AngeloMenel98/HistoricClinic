import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, MatIconModule, MatListModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SideBarComponent {
  constructor(private authService: AuthService) {}
  items = [
    {
      name: 'Pacientes',
      link: 'patients',
      icon: 'account',
    },
  ];
}
