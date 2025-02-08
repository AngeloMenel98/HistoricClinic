import { Injectable } from '@nestjs/common';
import { CreateInfectiousDiseaseDto } from '../dto/create-infectious-disease.dto';
import { UpdateInfectiousDiseaseDto } from '../dto/update-infectious-disease.dto';

@Injectable()
export class InfectiousDiseaseService {
  create(createInfectiousDiseaseDto: CreateInfectiousDiseaseDto) {
    return 'This action adds a new infectiousDisease';
  }

  findAll() {
    return `This action returns all infectiousDisease`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infectiousDisease`;
  }

  update(id: number, updateInfectiousDiseaseDto: UpdateInfectiousDiseaseDto) {
    return `This action updates a #${id} infectiousDisease`;
  }

  remove(id: number) {
    return `This action removes a #${id} infectiousDisease`;
  }
}
