import { Injectable } from '@nestjs/common';
import { CreateLiverdiseaseDto } from '../dto/create-liverdisease.dto';
import { UpdateLiverdiseaseDto } from '../dto/update-liverdisease.dto';

@Injectable()
export class LiverDiseaseService {
  create(createLiverdiseaseDto: CreateLiverdiseaseDto) {
    return 'This action adds a new liverdisease';
  }

  findAll() {
    return `This action returns all liverdisease`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liverdisease`;
  }

  update(id: number, updateLiverdiseaseDto: UpdateLiverdiseaseDto) {
    return `This action updates a #${id} liverdisease`;
  }

  remove(id: number) {
    return `This action removes a #${id} liverdisease`;
  }
}
