import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Appointment } from '@models/appointments/appointment';
import { AppointmentService } from '@services/appointments/appointment.service';
import { DayAppointComponent } from './dialogs/day-appoint/day-appoint.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddAppointComponent } from './dialogs/add-appoint/add-appoint/add-appoint.component';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  appointments: Appointment[];
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    DatePipe,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  // Propiedades requeridas
  currentDate = new Date();
  calendarDays: CalendarDay[] = [];
  selectedDay?: Date;
  selectedAppointments: Appointment[] = [];
  weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  appointments: Appointment[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.generateCalendar();
    this.loadAppointments();
  }

  private loadAppointments() {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        this.groupAppointments();
      },
      error: (err) => console.error('Error loading appointments', err),
    });
  }

  private generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDay = new Date(firstDay);
    startDay.setDate(startDay.getDate() - startDay.getDay());

    const endDay = new Date(lastDay);
    endDay.setDate(endDay.getDate() + (6 - endDay.getDay()));

    this.calendarDays = [];
    const current = new Date(startDay);

    while (current <= endDay) {
      this.calendarDays.push({
        date: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        appointments: [],
      });
      current.setDate(current.getDate() + 1);
    }
  }

  private groupAppointments() {
    const appointmentsMap = new Map<string, Appointment[]>();

    // 1. Normalizar todas las fechas a UTC
    this.appointments.forEach((appt) => {
      const dateObj = new Date(appt.date);
      const utcDate = new Date(
        dateObj.getTime() + dateObj.getTimezoneOffset() * 60000,
      );
      const dateKey = utcDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD

      if (!appointmentsMap.has(dateKey)) {
        appointmentsMap.set(dateKey, []);
      }
      appointmentsMap.get(dateKey)?.push(appt);
    });

    // 2. Alinear con las fechas del calendario
    this.calendarDays.forEach((day) => {
      const utcDay = new Date(
        day.date.getTime() + day.date.getTimezoneOffset() * 60000,
      );
      const dateKey = utcDay.toISOString().split('T')[0];

      day.appointments = appointmentsMap.get(dateKey) || [];
    });
  }

  selectDay(day: CalendarDay) {
    const appointments = day.appointments.map((a) => ({
      ...a,
      date: new Date(a.date),
    }));

    const dialogRef = this.dialog.open(DayAppointComponent, {
      width: '1500px',
      data: {
        date: day.date.toISOString(),
        appoints: appointments.sort(
          (a, b) => a.date.getTime() - b.date.getTime(),
        ),
      },
    });

    dialogRef.afterClosed().subscribe((app) => {
      if (!app) return;

      this.appointments = [...this.appointments, ...app];

      this.groupAppointments();
    });
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1,
    );
    this.updateCalendar();
  }

  previousMonth() {
    this.currentDate = new Date( // <-- Crear nueva instancia
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1,
    );
    this.updateCalendar();
  }

  private updateCalendar() {
    this.generateCalendar();
    this.groupAppointments();
    this.selectedAppointments = [];
  }

  get currentMonth(): Date {
    return this.currentDate;
  }

  getDayTooltip(day: CalendarDay): string {
    if (!day.appointments.length) return 'No hay citas';

    return day.appointments
      .map((appt) => {
        const date = new Date(appt.date);
        return `${date.toLocaleTimeString()} - ${appt.patientLastName}`;
      })
      .join('\n');
  }
}
