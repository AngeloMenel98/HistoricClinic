import { Repository, DataSource } from 'typeorm';
import { Medication } from '../entities/medication.entity';
export declare class MedicationRepository extends Repository<Medication> {
    private medicationRepository;
    private dataSource;
    constructor(medicationRepository: Repository<Medication>, dataSource: DataSource);
    createCondition(patient: Medication): Promise<Medication>;
}
