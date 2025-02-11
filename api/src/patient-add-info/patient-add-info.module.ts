import { Module } from '@nestjs/common';
import { PatientAddInfoController } from './controller/patient-add-info.controller';
import { PatientAddInfoService } from './service/patient-add-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientAddInfo } from './entities/patient-add-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientAddInfo])],
  controllers: [PatientAddInfoController],
  providers: [PatientAddInfoService],
})
export class PatientAddInfoModule {}
