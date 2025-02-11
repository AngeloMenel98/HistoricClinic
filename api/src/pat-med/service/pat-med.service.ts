import { Injectable } from '@nestjs/common';
import { CreatePatMedDto } from '../dto/create-pat-med.dto';
import { UpdatePatMedDto } from '../dto/update-pat-med.dto';

@Injectable()
export class PatMedService {
  create(createPatMedDto: CreatePatMedDto) {
    return 'This action adds a new patMed';
  }

  findAll() {
    return `This action returns all patMed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patMed`;
  }

  update(id: number, updatePatMedDto: UpdatePatMedDto) {
    return `This action updates a #${id} patMed`;
  }

  remove(id: number) {
    return `This action removes a #${id} patMed`;
  }
}
