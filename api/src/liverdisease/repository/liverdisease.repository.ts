import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LiverDisease } from '../entities/liverdisease.entity';

@Injectable()
export class LiverRepository extends Repository<LiverDisease> {
  constructor(
    @InjectRepository(LiverDisease)
    private liverRepository: Repository<LiverDisease>,
    private dataSource: DataSource,
  ) {
    super(liverRepository.target, liverRepository.manager);
  }

  async createLiver(patient: LiverDisease) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(patient);
    });
  }
}
