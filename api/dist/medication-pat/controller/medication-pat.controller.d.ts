import { CreateMedicationPatDto } from '../dto/create-medication-pat.dto';
import { UpdateMedicationPatDto } from '../dto/update-medication-pat.dto';
import { MedicationPatService } from '../service/medication-pat.service';
export declare class MedicationPatController {
    private readonly medicationPatService;
    constructor(medicationPatService: MedicationPatService);
    create(createMedicationPatDto: CreateMedicationPatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicationPatDto: UpdateMedicationPatDto): string;
    remove(id: string): string;
}
