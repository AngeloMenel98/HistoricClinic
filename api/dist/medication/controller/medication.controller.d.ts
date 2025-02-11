import { CreateMedicationDto } from '../dto/create-medication.dto';
import { UpdateMedicationDto } from '../dto/update-medication.dto';
import { MedicationService } from '../service/medication.service';
export declare class MedicationController {
    private readonly medicationService;
    constructor(medicationService: MedicationService);
    create(createMedicationDto: CreateMedicationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicationDto: UpdateMedicationDto): string;
    remove(id: string): string;
}
