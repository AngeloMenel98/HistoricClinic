import { CreateMedicalConditionDto } from '../dto/create-medical-condition.dto';
import { UpdateMedicalConditionDto } from '../dto/update-medical-condition.dto';
export declare class MedicalConditionsService {
    create(createMedicalConditionDto: CreateMedicalConditionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicalConditionDto: UpdateMedicalConditionDto): string;
    remove(id: number): string;
}
