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

  @Post('token')
  async exchangeCode(@Body() codeDto: { code: string }) {
    return this.authService.exchangeCodeForToken(codeDto.code);
  }

  /*@Post('userinfo')
  @UsePipes(new ValidationPipe({ transform: true }))
  login(@Body() loginDTO: LoginUserDTO) {
    console.log(loginDTO);
    return this.authService.login(loginDTO);
  }*/

  @Get('userinfo')
  @UseGuards(AuthGuard('jwt'))
  async getUserInfo(@Req() req) {
    return {
      id: req.user.userId,
      email: req.user.email,
      roles: req.user.roles,
    };
  }
}
