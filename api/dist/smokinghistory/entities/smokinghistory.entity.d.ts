import { SmokingStatus } from 'src/enum/smoking-status.enum';
import { Patient } from 'src/patients/entities/patient.entity';
export declare class SmokingHistory {
    id: string;
    status: SmokingStatus;
    startDate: Date;
    endDate: Date;
    patient: Patient;
}
