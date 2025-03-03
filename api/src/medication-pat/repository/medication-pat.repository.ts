import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicationPat } from '../entities/medication-pat.entity';

@Injectable()
export class MedPatRepo extends Repository<MedicationPat> {
  constructor(
    @InjectRepository(MedicationPat)
    private MedicationPatRepository: Repository<MedicationPat>,
    private dataSource: DataSource,
  ) {
    super(MedicationPatRepository.target, MedicationPatRepository.manager);
  }

  async createCondition(medPat: MedicationPat) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(medPat);
    });
  }
}
