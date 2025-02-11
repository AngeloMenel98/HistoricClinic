import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientRepository } from '../repository/patient.repository';
import { UsersService } from 'src/users/service/users.service';
import { Patient } from '../entities/patient.entity';
export declare class PatientsService {
    private patientRepository;
    private userService;
    constructor(patientRepository: PatientRepository, userService: UsersService);
    create(patientDTO: CreatePatientDto, userId: string): Promise<Patient>;
    findAll(): string;
    findOne(id: string): Promise<Patient>;
    update(id: number, updatePatientDto: UpdatePatientDto): string;
    remove(id: number): string;
}
