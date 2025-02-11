import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diagnosis } from '../entities/diagnosis.entity';

@Injectable()
export class DiagnosisRepository extends Repository<Diagnosis> {
  constructor(
    @InjectRepository(Diagnosis)
    private diagnosisRepository: Repository<Diagnosis>,
    private dataSource: DataSource,
  ) {
    super(diagnosisRepository.target, diagnosisRepository.manager);
  }

  async createDiagnosis(patient: Diagnosis) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(patient);
    });
  }
}
