import { Appointment } from '@models/appointments/appointment';
import { User } from '@models/user/user';

export interface Dentist {
  id: string;
  name: string;
  lastName: string;
  professionalId: string;
  phoneNumber: string;
  createdAt: string;

  user?: User[];
  appointments?: Appointment[];
}
