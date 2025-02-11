import { CreatePatientAddInfoDto } from '../dto/create-patient-add-info.dto';
import { UpdatePatientAddInfoDto } from '../dto/update-patient-add-info.dto';
import { PatientAddInfoService } from '../service/patient-add-info.service';
export declare class PatientAddInfoController {
    private readonly patientAddInfoService;
    constructor(patientAddInfoService: PatientAddInfoService);
    create(createPatientAddInfoDto: CreatePatientAddInfoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePatientAddInfoDto: UpdatePatientAddInfoDto): string;
    remove(id: string): string;
}
