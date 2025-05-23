import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from 'src/users/service/users.service';
import { JwtService } from '@nestjs/jwt';

import { compareHash, hashValue } from 'src/helpers/hash/bCrypt.helper';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDTO } from '../dto/login-user.dto';
import { CreateAuthUserDto } from '../dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(authDTO: CreateAuthUserDto) {
    const existingUser = await this.userService.findByUsernameOrEmail(
      authDTO.username,
      authDTO.email,
    );

    if (existingUser) {
      if (existingUser.email === authDTO.email) {
        throw new ConflictException('Email is already taken');
      }

      if (existingUser.username === authDTO.username) {
        throw new ConflictException('Username is already taken');
      }
    }

    const passwordHashed = await hashValue(authDTO.password);

    const newUser = new User();
    newUser.username = authDTO.username;
    newUser.email = authDTO.email;
    newUser.password = passwordHashed;
    newUser.role = authDTO.role;

    return this.userService.create(newUser);
  }

  async login(loginDTO: LoginUserDTO) {
    if (!loginDTO.username && !loginDTO.email) {
      throw new BadRequestException('Username or Email must be in the request');
    }
    const user = await this.userService.findByUsernameOrEmail(
      loginDTO.username,
      loginDTO.email,
    );

    const isPasswordValid = await compareHash(loginDTO.password, user.password);

    if (!isPasswordValid) {
      throw new ForbiddenException('Password is not valid');
    }

    user.loginAt = new Date();
    await this.userService.updateLoginAt(user.id, user);

    return this.generateToken(user);
  }

  private generateToken(user: User) {
    const payload = { id: user.id, username: user.username, role: user.role };

    const token = this.jwtService.sign(payload);

    return { token };
  }
  /*async exchangeCodeForToken(code: string) {
    // 1. Validar código con proveedor OAuth
    const params = {
      code,
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_SECRET,
      redirect_uri: process.env.OAUTH_REDIRECT_URI,
      grant_type: 'authorization_code',
    };

    const { data } = await axios.post(
      'https://oauth2.googleapis.com/token',
      new URLSearchParams(params),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );

    return data;
  }*/
}
