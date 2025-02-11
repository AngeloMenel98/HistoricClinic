import { Module } from '@nestjs/common';
import { MedicationPatService } from './service/medication-pat.service';
import { MedicationPatController } from './controller/medication-pat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicationPat } from './entities/medication-pat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicationPat])],
  controllers: [MedicationPatController],
  providers: [MedicationPatService],
})
export class MedicationPatModule {}
