import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Procedure } from '../entities/procedure.entity';

@Injectable()
export class ProcedureRepository extends Repository<Procedure> {
  constructor(
    @InjectRepository(Procedure)
    private procedureRepository: Repository<Procedure>,
    private dataSource: DataSource,
  ) {
    super(procedureRepository.target, procedureRepository.manager);
  }

  async createProcedure(procedure: Procedure) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(procedure);
    });
  }
}
