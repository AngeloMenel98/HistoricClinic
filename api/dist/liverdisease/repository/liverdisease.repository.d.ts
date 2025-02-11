import { Repository, DataSource } from 'typeorm';
import { LiverDisease } from '../entities/liverdisease.entity';
export declare class LiverRepository extends Repository<LiverDisease> {
    private liverRepository;
    private dataSource;
    constructor(liverRepository: Repository<LiverDisease>, dataSource: DataSource);
    createLiver(patient: LiverDisease): Promise<LiverDisease>;
}
