import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from '../entities/patient.entity';

@Injectable()
export class PatientRepository extends Repository<Patient> {
  constructor(
    @InjectRepository(Patient) private patientRepository: Repository<Patient>,
    private dataSource: DataSource,
  ) {
    super(patientRepository.target, patientRepository.manager);
  }

  async createPatient(patient: Patient) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(patient);
    });
  }
}
