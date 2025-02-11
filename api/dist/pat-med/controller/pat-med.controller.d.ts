import { PatMedService } from '../service/pat-med.service';
import { CreatePatMedDto } from '../dto/create-pat-med.dto';
import { UpdatePatMedDto } from '../dto/update-pat-med.dto';
export declare class PatMedController {
    private readonly patMedService;
    constructor(patMedService: PatMedService);
    create(createPatMedDto: CreatePatMedDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePatMedDto: UpdatePatMedDto): string;
    remove(id: string): string;
}
