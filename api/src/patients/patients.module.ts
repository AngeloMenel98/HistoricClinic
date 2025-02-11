import { Module } from '@nestjs/common';
import { PatientsController } from './controller/patients.controller';
import { PatientsService } from './service/patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { PatientRepository } from './repository/patient.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Patient]), UsersModule],
  controllers: [PatientsController],
  providers: [PatientsService, PatientRepository],
  exports: [PatientsService],
})
export class PatientsModule {}
