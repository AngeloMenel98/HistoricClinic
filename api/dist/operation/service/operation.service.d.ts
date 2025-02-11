import { CreateOperationDto } from '../dto/create-operation.dto';
import { UpdateOperationDto } from '../dto/update-operation.dto';
export declare class OperationService {
    create(createOperationDto: CreateOperationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOperationDto: UpdateOperationDto): string;
    remove(id: number): string;
}
