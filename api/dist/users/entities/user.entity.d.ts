import { Dentist } from 'src/dentists/entities/dentist.entity';
import { UserRole } from 'src/enum/user-role.enum';
import { Patient } from 'src/patients/entities/patient.entity';
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
    loginAt: Date;
    createdAt: Date;
    updatedAt: Date;
    patients: Patient[];
    dentists: Dentist[];
}
