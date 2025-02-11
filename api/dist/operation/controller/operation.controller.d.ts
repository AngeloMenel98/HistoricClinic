import { CreateOperationDto } from '../dto/create-operation.dto';
import { UpdateOperationDto } from '../dto/update-operation.dto';
import { OperationService } from '../service/operation.service';
export declare class OperationController {
    private readonly operationService;
    constructor(operationService: OperationService);
    create(createOperationDto: CreateOperationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOperationDto: UpdateOperationDto): string;
    remove(id: string): string;
}
