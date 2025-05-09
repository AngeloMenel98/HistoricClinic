import { Module } from '@nestjs/common';
import { PatientsController } from './controller/patients.controller';
import { PatientsService } from './service/patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { PatientRepository } from './repository/patient.repository';
import { UsersModule } from 'src/users/users.module';
import { SmokingHistoryModule } from 'src/smokinghistory/smokinghistory.module';
import { OperationModule } from 'src/operation/operation.module';
import { PatientAddInfoModule } from 'src/patient-add-info/patient-add-info.module';
import { MedicalConditionsModule } from 'src/medical-conditions/medical-conditions.module';
import { MedicationModule } from 'src/medication/medication.module';
import { BloodPressureModule } from 'src/blood-pressure/blood-pressure.module';
import { InfectiousDiseaseModule } from 'src/infectious-disease/infectious-disease.module';
import { LiverDiseaseModule } from 'src/liverdisease/liverdisease.module';
import { PatMedModule } from 'src/pat-med/pat-med.module';
import { OpPatModule } from 'src/op-pat/op-pat.module';
import { MedicationPatModule } from 'src/medication-pat/medication-pat.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient]),
    UsersModule,
    SmokingHistoryModule,
    OperationModule,
    PatientAddInfoModule,
    MedicalConditionsModule,
    MedicationModule,
    BloodPressureModule,
    InfectiousDiseaseModule,
    LiverDiseaseModule,
    PatMedModule,
    OpPatModule,
    MedicationPatModule,
  ],
  controllers: [PatientsController],
  providers: [PatientsService, PatientRepository],
  exports: [PatientsService],
})
export class PatientsModule {}
