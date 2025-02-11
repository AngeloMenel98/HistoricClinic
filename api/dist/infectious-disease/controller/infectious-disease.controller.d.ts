import { InfectiousDiseaseService } from '../service/infectious-disease.service';
import { CreateInfectiousDiseaseDto } from '../dto/create-infectious-disease.dto';
import { UpdateInfectiousDiseaseDto } from '../dto/update-infectious-disease.dto';
export declare class InfectiousDiseaseController {
    private readonly infectiousDiseaseService;
    constructor(infectiousDiseaseService: InfectiousDiseaseService);
    create(createInfectiousDiseaseDto: CreateInfectiousDiseaseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInfectiousDiseaseDto: UpdateInfectiousDiseaseDto): string;
    remove(id: string): string;
}
