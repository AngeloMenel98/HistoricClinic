import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { Appointment } from '../entities/appointment.entity';
import { DentistsService } from 'src/dentists/service/dentists.service';
import { PatientsService } from 'src/patients/service/patients.service';
import { AppointmentRepository } from '../repository/appointment.repository';
import { ProceduresService } from 'src/procedures/service/procedures.service';
import { Between } from 'typeorm';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly appointRepository: AppointmentRepository,
    private readonly dentistService: DentistsService,
    private readonly patientService: PatientsService,
    private readonly procedureService: ProceduresService,
  ) {}

  async create(appointDTO: CreateAppointmentDto, userId: string) {
    const dentist = await this.dentistService.findOne(appointDTO.dentistId);
    const patient = await this.patientService.findOne(appointDTO.patientId);

    const procedure = await this.getOrCreateProcedure(
      appointDTO.code,
      appointDTO.newCode,
    );

    const appoint = new Appointment();
    appoint.scheduledAt = appointDTO.scheduledAt;
    appoint.dentist = dentist;
    appoint.patient = patient;
    appoint.procedure = procedure;

    return this.appointRepository.createAppointment(appoint);
  }

  findAll() {
    return `This action returns all appointents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointent`;
  }

  async findByIdWithInfo(id: string) {
    const appoint = await this.appointRepository.findByIdWithInfo(id);

    if (!appoint) {
      throw new NotFoundException(`User with Id #${id} not Found`);
    }

    return appoint;
  }

  update(id: number, updateAppointentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointent`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointent`;
  }

  /* async findAppointDue(): Promise<Appointment[]> {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return this.appointRepository.find({
      where: {
        scheduledAt: Between(
          tomorrow.setHours(0, 0, 0, 0),
          tomorrow.setHours(23, 59, 59, 999),
        ),
        notificationSent: false,
      },
      relations: ['dentist', 'patient', 'procedure'],
    });
  }*/

  private async getOrCreateProcedure(codeId: string, newCode: string | null) {
    if (newCode) {
      return this.procedureService.create({ code: newCode });
    }
    return this.procedureService.findById(codeId);
  }
}
