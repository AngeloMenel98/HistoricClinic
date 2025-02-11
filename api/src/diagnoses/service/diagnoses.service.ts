import { ConflictException, Injectable } from '@nestjs/common';
import { CreateDiagnosisDto } from '../dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../dto/update-diagnosis.dto';
import { DiagnosisRepository } from '../repository/diagnose.repository';
import { Diagnosis } from '../entities/diagnosis.entity';
import { AppointmentsService } from 'src/appointments/service/appointments.service';

@Injectable()
export class DiagnosesService {
  constructor(
    private readonly diagnosisRepo: DiagnosisRepository,
    private readonly appointService: AppointmentsService,
  ) {}
  async create(diagnosisDTO: CreateDiagnosisDto, userId: string) {
    const appoint = await this.appointService.findByIdWithInfo(
      diagnosisDTO.appointmentId,
    );

    if (appoint.diagnosis) {
      throw new ConflictException('Appointment already has a diagnosis');
    }

    const diagnosis = new Diagnosis();
    diagnosis.description = diagnosisDTO.description;
    diagnosis.appointment = appoint;

    return this.diagnosisRepo.createDiagnosis(diagnosis);
  }

  findAll() {
    return `This action returns all diagnoses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnosis`;
  }

  update(id: number, updateDiagnosisDto: UpdateDiagnosisDto) {
    return `This action updates a #${id} diagnosis`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnosis`;
  }
}
