import { Repository, DataSource } from 'typeorm';
import { MedicalCondition } from '../entities/medical-condition.entity';
export declare class ConditionRepository extends Repository<MedicalCondition> {
    private conditionRepository;
    private dataSource;
    constructor(conditionRepository: Repository<MedicalCondition>, dataSource: DataSource);
    createCondition(patient: MedicalCondition): Promise<MedicalCondition>;
}
