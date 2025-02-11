import { Appointment } from 'src/appointments/entities/appointment.entity';
export declare class Diagnosis {
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    appointment: Appointment;
}
