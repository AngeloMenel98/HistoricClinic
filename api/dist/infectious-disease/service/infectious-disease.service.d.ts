import { CreateInfectiousDiseaseDto } from '../dto/create-infectious-disease.dto';
import { UpdateInfectiousDiseaseDto } from '../dto/update-infectious-disease.dto';
export declare class InfectiousDiseaseService {
    create(createInfectiousDiseaseDto: CreateInfectiousDiseaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInfectiousDiseaseDto: UpdateInfectiousDiseaseDto): string;
    remove(id: number): string;
}
