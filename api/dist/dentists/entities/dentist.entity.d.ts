import { Appointment } from 'src/appointments/entities/appointment.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Dentist {
    id: string;
    name: string;
    lastName: string;
    professionalId: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    appointments: Appointment[];
}
