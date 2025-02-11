import { CreateLiverdiseaseDto } from '../dto/create-liverdisease.dto';
import { UpdateLiverdiseaseDto } from '../dto/update-liverdisease.dto';
import { LiverDiseaseService } from '../service/liverdisease.service';
export declare class LiverDiseaseController {
    private readonly liverService;
    constructor(liverService: LiverDiseaseService);
    create(createLiverdiseaseDto: CreateLiverdiseaseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLiverdiseaseDto: UpdateLiverdiseaseDto): string;
    remove(id: string): string;
}
