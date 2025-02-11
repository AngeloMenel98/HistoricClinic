import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalCondition } from '../entities/medical-condition.entity';

@Injectable()
export class ConditionRepository extends Repository<MedicalCondition> {
  constructor(
    @InjectRepository(MedicalCondition)
    private conditionRepository: Repository<MedicalCondition>,
    private dataSource: DataSource,
  ) {
    super(conditionRepository.target, conditionRepository.manager);
  }

  async createCondition(patient: MedicalCondition) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(patient);
    });
  }
}
