import { CreateOpPatDto } from '../dto/create-op-pat.dto';
import { UpdateOpPatDto } from '../dto/update-op-pat.dto';
export declare class OpPatService {
    create(createOpPatDto: CreateOpPatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOpPatDto: UpdateOpPatDto): string;
    remove(id: number): string;
}
