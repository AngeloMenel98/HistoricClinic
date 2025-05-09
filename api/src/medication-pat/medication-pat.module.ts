import { Module } from '@nestjs/common';
import { MedicationPatService } from './service/medication-pat.service';
import { MedicationPatController } from './controller/medication-pat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicationPat } from './entities/medication-pat.entity';
import { MedPatRepo } from './repository/medication-pat.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedicationPat])],
  controllers: [MedicationPatController],
  providers: [MedicationPatService, MedPatRepo],
  exports: [MedPatRepo],
})
export class MedicationPatModule {}
