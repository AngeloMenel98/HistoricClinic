import { Module } from '@nestjs/common';
import { PatientAddInfoController } from './controller/patient-add-info.controller';
import { PatientAddInfoService } from './service/patient-add-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientAddInfo } from './entities/patient-add-info.entity';
import { PatientAddRepo } from './repository/patient-add-info.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PatientAddInfo])],
  controllers: [PatientAddInfoController],
  providers: [PatientAddInfoService, PatientAddRepo],
  exports: [PatientAddRepo],
})
export class PatientAddInfoModule {}
