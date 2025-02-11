import { Repository, DataSource } from 'typeorm';
import { Diagnosis } from '../entities/diagnosis.entity';
export declare class DiagnosisRepository extends Repository<Diagnosis> {
    private diagnosisRepository;
    private dataSource;
    constructor(diagnosisRepository: Repository<Diagnosis>, dataSource: DataSource);
    createDiagnosis(patient: Diagnosis): Promise<Diagnosis>;
}
