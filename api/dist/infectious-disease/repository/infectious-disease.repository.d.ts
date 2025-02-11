import { Repository, DataSource } from 'typeorm';
import { InfectiousDisease } from '../entities/infectious-disease.entity';
export declare class InfDisRepository extends Repository<InfectiousDisease> {
    private infDisRepository;
    private dataSource;
    constructor(infDisRepository: Repository<InfectiousDisease>, dataSource: DataSource);
    createInfDiss(user: InfectiousDisease): Promise<InfectiousDisease>;
}
