import { CreateSmokinghistoryDto } from '../dto/create-smokinghistory.dto';
import { UpdateSmokinghistoryDto } from '../dto/update-smokinghistory.dto';
export declare class SmokinghistoryService {
    create(createSmokinghistoryDto: CreateSmokinghistoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSmokinghistoryDto: UpdateSmokinghistoryDto): string;
    remove(id: number): string;
}
