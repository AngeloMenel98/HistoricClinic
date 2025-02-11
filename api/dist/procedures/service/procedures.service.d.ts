import { CreateProcedureDto } from '../dto/create-procedure.dto';
import { UpdateProcedureDto } from '../dto/update-procedure.dto';
import { ProcedureRepository } from '../repository/procedure.repository';
import { Procedure } from '../entities/procedure.entity';
export declare class ProceduresService {
    private readonly procedureRepo;
    constructor(procedureRepo: ProcedureRepository);
    create(procedureDTO: CreateProcedureDto): Promise<Procedure>;
    findAll(): string;
    findById(id: string): Promise<Procedure>;
    findByCodeOrCreate(code: string): Promise<Procedure>;
    update(id: number, updateProcedureDto: UpdateProcedureDto): string;
    remove(id: number): string;
}
