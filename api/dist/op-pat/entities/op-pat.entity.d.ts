import { Operation } from 'src/operation/entities/operation.entity';
import { Patient } from 'src/patients/entities/patient.entity';
export declare class OpPat {
    operationId: string;
    patientId: string;
    date: Date;
    operation: Operation;
    patient: Patient;
}
