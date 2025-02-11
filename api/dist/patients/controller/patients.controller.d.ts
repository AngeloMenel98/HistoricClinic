import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientsService } from '../service/patients.service';
import { ResPatientDTO } from '../dto/response-patient.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(patientDTO: CreatePatientDto, userId: string): Promise<ResPatientDTO>;
    findAll(): string;
    findOne(id: string): Promise<import("../entities/patient.entity").Patient>;
    update(id: string, updatePatientDto: UpdatePatientDto): string;
    remove(id: string): string;
}
