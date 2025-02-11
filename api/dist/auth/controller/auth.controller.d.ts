import { CreateAuthUserDto } from '../dto/create-auth.dto';
import { AuthService } from '../service/auth.service';
import { LoginUserDTO } from '../dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(authDTO: CreateAuthUserDto): Promise<{
        id: string;
        username: string;
        role: import("../../enum/user-role.enum").UserRole;
    }>;
    login(loginDTO: LoginUserDTO): Promise<{
        token: string;
    }>;
}
