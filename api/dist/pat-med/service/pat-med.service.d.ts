import { CreatePatMedDto } from '../dto/create-pat-med.dto';
import { UpdatePatMedDto } from '../dto/update-pat-med.dto';
export declare class PatMedService {
    create(createPatMedDto: CreatePatMedDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePatMedDto: UpdatePatMedDto): string;
    remove(id: number): string;
}
