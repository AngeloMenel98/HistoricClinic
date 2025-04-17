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

  async findByIdWithInfo(id: string) {
    return this.createQueryBuilder('a')
      .innerJoin('a.patient', 'pat')
      .innerJoin('a.dentist', 'dent')
      .leftJoin('a.procedure', 'pro')
      .leftJoin('a.diagnosis', 'diag')
      .addSelect(['pat.id', 'dent.id', 'pro.id', 'diag.id'])
      .where('a.id = :id', { id })
      .getOne();
  }

  async findAll() {
    return this.createQueryBuilder('app')
      .innerJoinAndSelect('app.patient', 'pat')
      .innerJoinAndSelect('app.dentist', 'den')
      .innerJoinAndSelect('app.procedure', 'pro')
      .leftJoinAndSelect('app.diagnosis', 'diag')
      .getMany();
  }
}
