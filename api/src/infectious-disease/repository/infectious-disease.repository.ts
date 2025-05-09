import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InfectiousDisease } from '../entities/infectious-disease.entity';

@Injectable()
export class InfDisRepository extends Repository<InfectiousDisease> {
  constructor(
    @InjectRepository(InfectiousDisease)
    private infDisRepository: Repository<InfectiousDisease>,
    private dataSource: DataSource,
  ) {
    super(infDisRepository.target, infDisRepository.manager);
  }

  async createInfDiss(user: InfectiousDisease) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(user);
    });
  }
}
