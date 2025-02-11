import { MedicationPat } from 'src/medication-pat/entities/medication-pat.entity';
export declare class Medication {
    id: string;
    name: string;
    note: string;
    medPats: MedicationPat[];
}
