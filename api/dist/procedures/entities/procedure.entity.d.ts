import { Appointment } from 'src/appointments/entities/appointment.entity';
export declare class Procedure {
    id: string;
    name: string;
    codeProcedure: string;
    createdAt: Date;
    updatedAt: Date;
    appointments: Appointment[];
}
