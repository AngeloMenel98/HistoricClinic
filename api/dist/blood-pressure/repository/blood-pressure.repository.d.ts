import { Repository, DataSource } from 'typeorm';
import { BloodPressure } from '../entities/blood-pressure.entity';
export declare class BloodPressureRepository extends Repository<BloodPressure> {
    private bloodPressureRepository;
    private dataSource;
    constructor(bloodPressureRepository: Repository<BloodPressure>, dataSource: DataSource);
    createBloodPressure(patient: BloodPressure): Promise<BloodPressure>;
}
