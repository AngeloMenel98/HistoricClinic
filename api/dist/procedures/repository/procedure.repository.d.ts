import { Repository, DataSource } from 'typeorm';
import { Procedure } from '../entities/procedure.entity';
export declare class ProcedureRepository extends Repository<Procedure> {
    private procedureRepository;
    private dataSource;
    constructor(procedureRepository: Repository<Procedure>, dataSource: DataSource);
    createProcedure(procedure: Procedure): Promise<Procedure>;
    findByCode(code: string): Promise<Procedure>;
}
