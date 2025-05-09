import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmokingHistory } from '../entities/smokinghistory.entity';

@Injectable()
export class SmokingRepository extends Repository<SmokingHistory> {
  constructor(
    @InjectRepository(SmokingHistory)
    private smokeRepository: Repository<SmokingHistory>,
    private dataSource: DataSource,
  ) {
    super(smokeRepository.target, smokeRepository.manager);
  }

  async createPatient(smokeHistory: SmokingHistory) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(smokeHistory);
    });
  }

  async findAll() {}
}
