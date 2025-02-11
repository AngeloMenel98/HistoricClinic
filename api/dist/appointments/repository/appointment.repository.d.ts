import { Repository, DataSource } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
export declare class AppointmentRepository extends Repository<Appointment> {
    private appointmentRepository;
    private dataSource;
    constructor(appointmentRepository: Repository<Appointment>, dataSource: DataSource);
    createAppointment(appointment: Appointment): Promise<Appointment>;
    findByIdWithInfo(id: string): Promise<Appointment>;
}
