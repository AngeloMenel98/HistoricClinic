import { SmokinghistoryService } from '../service/smokinghistory.service';
import { CreateSmokinghistoryDto } from '../dto/create-smokinghistory.dto';
import { UpdateSmokinghistoryDto } from '../dto/update-smokinghistory.dto';
export declare class SmokinghistoryController {
    private readonly smokinghistoryService;
    constructor(smokinghistoryService: SmokinghistoryService);
    create(createSmokinghistoryDto: CreateSmokinghistoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSmokinghistoryDto: UpdateSmokinghistoryDto): string;
    remove(id: string): string;
}
