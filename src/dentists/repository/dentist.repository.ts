import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dentist } from '../entities/dentist.entity';

@Injectable()
export class DentistRepository extends Repository<Dentist> {
  constructor(
    @InjectRepository(Dentist) private dentistRepository: Repository<Dentist>,
    private dataSource: DataSource,
  ) {
    super(dentistRepository.target, dentistRepository.manager);
  }

  async createDentist(dentist: Dentist) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(dentist);
    });
  }
}
