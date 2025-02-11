import { CreateDiagnosisDto } from '../dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../dto/update-diagnosis.dto';
import { DiagnosesService } from '../service/diagnoses.service';
import { ResDiagnosisDTO } from '../dto/response-diagnosis.dto';
export declare class DiagnosesController {
    private readonly diagnosesService;
    constructor(diagnosesService: DiagnosesService);
    create(diagnosisDTO: CreateDiagnosisDto, userId: string): Promise<ResDiagnosisDTO>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDiagnosisDto: UpdateDiagnosisDto): string;
    remove(id: string): string;
}
