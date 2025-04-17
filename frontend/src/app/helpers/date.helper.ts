import { Appointment } from '@models/appointments/appointment';

export function formatDateTime(date: string | Date): string {
  const dateObj = new Date(date);

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const seconds = dateObj.getSeconds().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export function formatDate(date: string | Date): string {
  const dateObj = new Date(date);

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();

  return `${day}/${month}/${year}`;
}

export function parseAppointmentDate(appt: Appointment): {
  date: Date;
  year: number;
  month: number;
  day: number;
  time: string;
} {
  const date = new Date(appt.date);
  return {
    date,
    year: date.getFullYear(),
    month: date.getMonth() + 1, // Meses de 1-12
    day: date.getDate(),
    time: date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
}
