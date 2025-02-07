import { Module } from '@nestjs/common';
import { DentistsService } from './service/dentists.service';
import { DentistsController } from './controller/dentists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dentist } from './entities/dentist.entity';
import { DentistRepository } from './repository/dentist.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dentist]), UsersModule],
  controllers: [DentistsController],
  providers: [DentistsService, DentistRepository],
})
export class DentistsModule {}
