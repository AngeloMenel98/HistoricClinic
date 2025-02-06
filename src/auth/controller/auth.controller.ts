import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAuthUserDto } from '../dto/create-auth.dto';
import { UpdateAuthUserDto } from '../dto/update-auth.dto';
import { AuthService } from '../service/auth.service';
import { LoginUserDTO } from '../dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() authDTO: CreateAuthUserDto) {
    const user = await this.authService.createUser(authDTO);

    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  login(@Body() loginDTO: LoginUserDTO) {
    return this.authService.login(loginDTO);
  }
}
