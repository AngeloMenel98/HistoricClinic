import { Component, Inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { Appointment } from '@models/appointments/appointment';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddAppointComponent } from '../add-appoint/add-appoint/add-appoint.component';

@Component({
  selector: 'app-day-appoint',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    DatePipe,
    MatIconModule,
  ],
  templateUrl: './day-appoint.component.html',
  styleUrls: ['./day-appoint.component.scss'],
})
export class DayAppointComponent {
  constructor(
    public dialogRef: MatDialogRef<DayAppointComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      date: string;
      appoints: Appointment[];
    },
    private dialog: MatDialog,
  ) {}

  get formattedDate(): string {
    return new Date(this.data.date).toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  addAppointment() {
    const dialogRef = this.dialog.open(AddAppointComponent, {
      width: '400px',
      data: {
        selectedDate: new Date(this.data.date),
      },
    });

    dialogRef.afterClosed().subscribe((appt: Appointment | undefined) => {
      if (!appt) return;

      this.data.appoints.push(appt);
      this.data.appoints.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      this.data = { ...this.data };
    });
  }

  onCancel(): void {
    this.dialogRef.close(this.data.appoints);
  }
}
