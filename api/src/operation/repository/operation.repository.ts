import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation } from '../entities/operation.entity';

@Injectable()
export class OperationRepository extends Repository<Operation> {
  constructor(
    @InjectRepository(Operation)
    private OperationRepository: Repository<Operation>,
    private dataSource: DataSource,
  ) {
    super(OperationRepository.target, OperationRepository.manager);
  }

  async createCondition(medPat: Operation) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(medPat);
    });
  }
}
