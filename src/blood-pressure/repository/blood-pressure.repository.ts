import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BloodPressure } from '../entities/blood-pressure.entity';

@Injectable()
export class BloodPressureRepository extends Repository<BloodPressure> {
  constructor(
    @InjectRepository(BloodPressure)
    private bloodPressureRepository: Repository<BloodPressure>,
    private dataSource: DataSource,
  ) {
    super(bloodPressureRepository.target, bloodPressureRepository.manager);
  }

  async createBloodPressure(patient: BloodPressure) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(patient);
    });
  }
}
