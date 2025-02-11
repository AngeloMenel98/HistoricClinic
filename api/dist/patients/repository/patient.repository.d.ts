import { Repository, DataSource } from 'typeorm';
import { Patient } from '../entities/patient.entity';
export declare class PatientRepository extends Repository<Patient> {
    private patientRepository;
    private dataSource;
    constructor(patientRepository: Repository<Patient>, dataSource: DataSource);
    createPatient(patient: Patient): Promise<Patient>;
}
