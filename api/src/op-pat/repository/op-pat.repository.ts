import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OpPat } from '../entities/op-pat.entity';

@Injectable()
export class OpPatRepo extends Repository<OpPat> {
  constructor(
    @InjectRepository(OpPat)
    private OpPatPatRepository: Repository<OpPat>,
    private dataSource: DataSource,
  ) {
    super(OpPatPatRepository.target, OpPatPatRepository.manager);
  }

  async createCondition(medPat: OpPat) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(medPat);
    });
  }
}
