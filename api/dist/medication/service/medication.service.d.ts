import { CreateMedicationDto } from '../dto/create-medication.dto';
import { UpdateMedicationDto } from '../dto/update-medication.dto';
export declare class MedicationService {
    create(createMedicationDto: CreateMedicationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicationDto: UpdateMedicationDto): string;
    remove(id: number): string;
}
