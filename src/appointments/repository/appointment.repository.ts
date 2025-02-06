import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from '../entities/appointment.entity';

@Injectable()
export class AppointmentRepository extends Repository<Appointment> {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    private dataSource: DataSource,
  ) {
    super(appointmentRepository.target, appointmentRepository.manager);
  }

  async createAppointment(appointment: Appointment) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(appointment);
    });
  }
}
