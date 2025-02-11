import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    updateLoginAt(id: string, userDTO: UpdateUserDto): Promise<{
        id: string;
        username: string;
        role: import("../../enum/user-role.enum").UserRole;
    }>;
    findByUsernameOrEmail(username: any, email: any): Promise<User>;
    remove(id: number): string;
}
