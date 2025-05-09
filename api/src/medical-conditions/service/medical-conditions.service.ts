import { Injectable } from '@nestjs/common';
import { CreateMedicalConditionDto } from '../dto/create-medical-condition.dto';
import { UpdateMedicalConditionDto } from '../dto/update-medical-condition.dto';

@Injectable()
export class MedicalConditionsService {
  create(createMedicalConditionDto: CreateMedicalConditionDto) {
    return 'This action adds a new medicalCondition';
  }

  findAll() {
    return `This action returns all medicalConditions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalCondition`;
  }

  update(id: number, updateMedicalConditionDto: UpdateMedicalConditionDto) {
    return `This action updates a #${id} medicalCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalCondition`;
  }
}
