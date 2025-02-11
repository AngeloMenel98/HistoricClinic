import { Repository, DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserRepository extends Repository<User> {
    private userRepository;
    private dataSource;
    constructor(userRepository: Repository<User>, dataSource: DataSource);
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User>;
}
