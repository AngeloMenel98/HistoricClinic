import { Dentist } from 'src/dentists/entities/dentist.entity';
import { Diagnosis } from 'src/diagnoses/entities/diagnosis.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
export declare class Appointment {
    id: string;
    appointmentDate: Date;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
    patient: Patient;
    dentist: Dentist;
    diagnosis: Diagnosis;
    procedure: Procedure;
}
