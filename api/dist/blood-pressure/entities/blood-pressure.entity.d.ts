import { PressureLevel } from 'src/enum/blood-pressure.enum';
import { Patient } from 'src/patients/entities/patient.entity';
export declare class BloodPressure {
    id: string;
    level: PressureLevel;
    number: number;
    patient: Patient;
}
