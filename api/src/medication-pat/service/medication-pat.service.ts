import { Injectable } from '@nestjs/common';
import { CreateMedicationPatDto } from '../dto/create-medication-pat.dto';
import { UpdateMedicationPatDto } from '../dto/update-medication-pat.dto';

@Injectable()
export class MedicationPatService {
  create(createMedicationPatDto: CreateMedicationPatDto) {
    return 'This action adds a new medicationPat';
  }

  findAll() {
    return `This action returns all medicationPat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicationPat`;
  }

  update(id: number, updateMedicationPatDto: UpdateMedicationPatDto) {
    return `This action updates a #${id} medicationPat`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicationPat`;
  }
}
