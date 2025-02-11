import { ProceduresService } from '../service/procedures.service';
import { CreateProcedureDto } from '../dto/create-procedure.dto';
import { UpdateProcedureDto } from '../dto/update-procedure.dto';
export declare class ProceduresController {
    private readonly proceduresService;
    constructor(proceduresService: ProceduresService);
    create(createProcedureDto: CreateProcedureDto): Promise<import("../entities/procedure.entity").Procedure>;
    findAll(): string;
    findOne(id: string): Promise<import("../entities/procedure.entity").Procedure>;
    update(id: string, updateProcedureDto: UpdateProcedureDto): string;
    remove(id: string): string;
}
