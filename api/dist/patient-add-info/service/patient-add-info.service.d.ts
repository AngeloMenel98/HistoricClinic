import { CreatePatientAddInfoDto } from '../dto/create-patient-add-info.dto';
import { UpdatePatientAddInfoDto } from '../dto/update-patient-add-info.dto';
export declare class PatientAddInfoService {
    create(createPatientAddInfoDto: CreatePatientAddInfoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePatientAddInfoDto: UpdatePatientAddInfoDto): string;
    remove(id: number): string;
}
