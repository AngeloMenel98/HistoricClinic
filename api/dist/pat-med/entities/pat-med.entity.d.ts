import { MedicalCondition } from 'src/medical-conditions/entities/medical-condition.entity';
import { Patient } from 'src/patients/entities/patient.entity';
export declare class PatMed {
    conditionId: string;
    patientId: string;
    info: string;
    condition: MedicalCondition;
    patient: Patient;
}
