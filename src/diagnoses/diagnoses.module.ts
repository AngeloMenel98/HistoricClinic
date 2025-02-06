import { Module } from '@nestjs/common';
import { DiagnosesController } from './controller/diagnoses.controller';
import { DiagnosesService } from './service/diagnoses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagnosis } from './entities/diagnosis.entity';
import { DiagnosisRepository } from './repository/diagnose.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Diagnosis])],
  controllers: [DiagnosesController],
  providers: [DiagnosesService, DiagnosisRepository],
})
export class DiagnosesModule {}
