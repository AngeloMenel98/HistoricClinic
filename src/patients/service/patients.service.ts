import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientRepository } from '../repository/patient.repository';
import { UsersService } from 'src/users/service/users.service';
import { Patient } from '../entities/patient.entity';
@Injectable()
export class PatientsService {
  constructor(
    private patientRepository: PatientRepository,
    private userService: UsersService,
  ) {}
  async create(patientDTO: CreatePatientDto, userId: string) {
    const user = await this.userService.findOne(userId);

    const patient = new Patient();
    patient.name = patientDTO.name;
    patient.lastName = patientDTO.lastName;
    patient.dni = patientDTO.dni;
    patient.cuit = patientDTO.cuit;
    patient.birthDate = patientDTO.birthDate;
    patient.occupation = patientDTO.occupation;
    patient.address = patientDTO.address;
    patient.phoneNumber = patientDTO.phoneNumber;
    patient.email = patientDTO.email;
    patient.user = user;

    return this.patientRepository.save(patient);
  }

  findAll() {
    return `This action returns all patients`;
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
