import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatMed } from '../entities/pat-med.entity';

@Injectable()
export class PatMedRepo extends Repository<PatMed> {
  constructor(
    @InjectRepository(PatMed)
    private PatMedPatRepository: Repository<PatMed>,
    private dataSource: DataSource,
  ) {
    super(PatMedPatRepository.target, PatMedPatRepository.manager);
  }

  async createCondition(medPat: PatMed) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(medPat);
    });
  }
}
