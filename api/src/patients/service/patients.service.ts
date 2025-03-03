import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientRepository } from '../repository/patient.repository';
import { UsersService } from 'src/users/service/users.service';

@Injectable()
export class PatientsService {
  constructor(
    private patientRepository: PatientRepository,
    private userService: UsersService,
  ) {}

  async create(patientDTO: CreatePatientDto, userId: string) {
    const user = await this.userService.findOne(userId);

    if (patientDTO.bloodPressure) {
    }

    return this.patientRepository.createPatient(patientDTO, user);
  }

  findAll() {
    const patients = this.patientRepository.findAll();

    if (!patients) {
      throw new NotFoundException(`There is any patient created.`);
    }
    return patients;
  }

  async findOne(id: string) {
    const dentist = await this.patientRepository.findOneBy({ id });

    if (!dentist) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }

    return dentist;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
