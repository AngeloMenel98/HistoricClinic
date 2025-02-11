import { CreateMedicalConditionDto } from '../dto/create-medical-condition.dto';
import { UpdateMedicalConditionDto } from '../dto/update-medical-condition.dto';
import { MedicalConditionsService } from '../service/medical-conditions.service';
export declare class MedicalConditionsController {
    private readonly medicalConditionsService;
    constructor(medicalConditionsService: MedicalConditionsService);
    create(createMedicalConditionDto: CreateMedicalConditionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicalConditionDto: UpdateMedicalConditionDto): string;
    remove(id: string): string;
}
