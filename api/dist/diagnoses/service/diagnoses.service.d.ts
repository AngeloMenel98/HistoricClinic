import { CreateDiagnosisDto } from '../dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../dto/update-diagnosis.dto';
import { DiagnosisRepository } from '../repository/diagnose.repository';
import { Diagnosis } from '../entities/diagnosis.entity';
import { AppointmentsService } from 'src/appointments/service/appointments.service';
export declare class DiagnosesService {
    private readonly diagnosisRepo;
    private readonly appointService;
    constructor(diagnosisRepo: DiagnosisRepository, appointService: AppointmentsService);
    create(diagnosisDTO: CreateDiagnosisDto, userId: string): Promise<Diagnosis>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDiagnosisDto: UpdateDiagnosisDto): string;
    remove(id: number): string;
}
