import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  create(user: User) {
    return this.userRepository.createUser(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with Id #${id} not Found`);
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async updateLoginAt(id: string, userDTO: UpdateUserDto) {
    const user = await this.findOne(id);

    const newUser = await this.userRepository.updateUser(
      Object.assign(user, userDTO),
    );

    return {
      id: newUser.id,
      username: newUser.username,
      role: newUser.role,
    };
  }

  async findByUsernameOrEmail(username, email) {
    const user = await this.userRepository.findOne({
      where: [{ username, email }],
    });

    if (!user) {
      return null;
    }

    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
