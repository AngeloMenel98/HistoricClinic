import { CreateMedicationPatDto } from '../dto/create-medication-pat.dto';
import { UpdateMedicationPatDto } from '../dto/update-medication-pat.dto';
export declare class MedicationPatService {
    create(createMedicationPatDto: CreateMedicationPatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicationPatDto: UpdateMedicationPatDto): string;
    remove(id: number): string;
}
