import { CreateOpPatDto } from '../dto/create-op-pat.dto';
import { UpdateOpPatDto } from '../dto/update-op-pat.dto';
import { OpPatService } from '../service/op-pat.service';
export declare class OpPatController {
    private readonly opPatService;
    constructor(opPatService: OpPatService);
    create(createOpPatDto: CreateOpPatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOpPatDto: UpdateOpPatDto): string;
    remove(id: string): string;
}
