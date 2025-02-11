import { CreateAuthUserDto } from '../dto/create-auth.dto';
import { UsersService } from 'src/users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDTO } from '../dto/login-user.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    createUser(authDTO: CreateAuthUserDto): Promise<User>;
    login(loginDTO: LoginUserDTO): Promise<{
        token: string;
    }>;
    private generateToken;
}
