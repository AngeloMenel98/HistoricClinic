import { Repository, DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {
    super(userRepository.target, userRepository.manager);
  }

  async createUser(user: User) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(user);
    });
  }

  async updateUser(user: User) {
    return this.dataSource.manager.transaction(async (manager) => {
      return manager.save(user);
    });
  }
}
