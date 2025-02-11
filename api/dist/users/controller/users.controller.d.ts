import { UsersService } from '../service/users.service';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
