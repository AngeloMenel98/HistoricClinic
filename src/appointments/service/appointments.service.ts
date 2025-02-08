import { Injectable } from '@nestjs/common';
import { CreateAppointentDto } from '../dto/create-appointment.dto';
import { UpdateAppointentDto } from '../dto/update-appointment.dto';
import { Appointment } from '../entities/appointment.entity';
import { DentistsService } from 'src/dentists/service/dentists.service';
import { PatientsService } from 'src/patients/service/patients.service';
import { AppointmentRepository } from '../repository/appointment.repository';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly appointRepository: AppointmentRepository,
    private readonly dentistService: DentistsService,
    private readonly patientService: PatientsService,
  ) {}

  async create(appointDTO: CreateAppointentDto, userId: string) {
    const dentist = await this.dentistService.findOne(appointDTO.dentistId);
    const patient = await this.patientService.findOne(appointDTO.patientId);

    const appoint = new Appointment();
    appoint.appointmentDate = appointDTO.appointmentDate;
    appoint.dentist = dentist;
    appoint.patient = patient;

    return this.appointRepository.createAppointment(appoint);
  }

  findAll() {
    return `This action returns all appointents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointent`;
  }

  update(id: number, updateAppointentDto: UpdateAppointentDto) {
    return `This action updates a #${id} appointent`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointent`;
  }
}
