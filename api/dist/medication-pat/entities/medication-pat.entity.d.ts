import { Medication } from 'src/medication/entities/medication.entity';
import { Patient } from 'src/patients/entities/patient.entity';
export declare class MedicationPat {
    patientId: string;
    medicationId: string;
    dosage: string;
    note: string;
    medication: Medication;
    patient: Patient;
}
