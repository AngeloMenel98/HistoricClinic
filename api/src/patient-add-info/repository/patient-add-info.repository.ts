import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientAddInfo } from '../entities/patient-add-info.entity';

@Injectable()
export class PatientAddRepo extends Repository<PatientAddInfo> {
  constructor(
    @InjectRepository(PatientAddInfo)
    private PatientAddInfoPatRepository: Repository<PatientAddInfo>,
    private dataSource: DataSource,
  ) {
    super(
      PatientAddInfoPatRepository.target,
      PatientAddInfoPatRepository.manager,
    );
  }

  async createCondition(medPat: PatientAddInfo) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(medPat);
    });
  }
}
