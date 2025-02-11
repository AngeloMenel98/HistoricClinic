import { Injectable } from '@nestjs/common';
import { CreatePatientAddInfoDto } from '../dto/create-patient-add-info.dto';
import { UpdatePatientAddInfoDto } from '../dto/update-patient-add-info.dto';

@Injectable()
export class PatientAddInfoService {
  create(createPatientAddInfoDto: CreatePatientAddInfoDto) {
    return 'This action adds a new patientAddInfo';
  }

  findAll() {
    return `This action returns all patientAddInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientAddInfo`;
  }

  update(id: number, updatePatientAddInfoDto: UpdatePatientAddInfoDto) {
    return `This action updates a #${id} patientAddInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientAddInfo`;
  }
}
