import { Module } from '@nestjs/common';
import { MedicationController } from './controller/medication.controller';
import { MedicationService } from './service/medication.service';
import { MedicationRepository } from './repository/medication.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medication])],
  controllers: [MedicationController],
  providers: [MedicationService, MedicationRepository],
})
export class MedicationModule {}
