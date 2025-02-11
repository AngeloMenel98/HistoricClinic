import { UserRole } from 'src/enum/user-role.enum';
export declare class CreateAuthUserDto {
    username: string;
    email: string;
    password: string;
    role: UserRole;
}
