import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medication } from '../entities/medication.entity';

@Injectable()
export class MedicationRepository extends Repository<Medication> {
  constructor(
    @InjectRepository(Medication)
    private medicationRepository: Repository<Medication>,
    private dataSource: DataSource,
  ) {
    super(medicationRepository.target, medicationRepository.manager);
  }

  async createMedication(medications: Medication[]) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(medications);
    });
  }
}
