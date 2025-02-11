import { Repository, DataSource } from 'typeorm';
import { Dentist } from '../entities/dentist.entity';
export declare class DentistRepository extends Repository<Dentist> {
    private dentistRepository;
    private dataSource;
    constructor(dentistRepository: Repository<Dentist>, dataSource: DataSource);
    createDentist(dentist: Dentist): Promise<Dentist>;
}
