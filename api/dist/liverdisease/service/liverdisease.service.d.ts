import { CreateLiverdiseaseDto } from '../dto/create-liverdisease.dto';
import { UpdateLiverdiseaseDto } from '../dto/update-liverdisease.dto';
export declare class LiverDiseaseService {
    create(createLiverdiseaseDto: CreateLiverdiseaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLiverdiseaseDto: UpdateLiverdiseaseDto): string;
    remove(id: number): string;
}
