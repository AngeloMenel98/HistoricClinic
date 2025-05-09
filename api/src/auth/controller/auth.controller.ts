import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CreateAuthUserDto } from '../dto/create-auth.dto';
import { AuthService } from '../service/auth.service';
import { LoginUserDTO } from '../dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() authDTO: CreateAuthUserDto) {
    const user = await this.authService.createUser(authDTO);

    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  }

  @Post('login')
  login(@Body() loginDTO: LoginUserDTO) {
    return this.authService.login(loginDTO);
  }
}
