import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DentistsModule } from './dentists/dentists.module';
import { DiagnosesModule } from './diagnoses/diagnoses.module';
import { ProceduresModule } from './procedures/procedures.module';
import { PatientsModule } from './patients/patients.module';
import { DataBaseModule } from './database/database.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SmokingHistoryModule } from './smokinghistory/smokinghistory.module';
import { PatientAddInfoModule } from './patient-add-info/patient-add-info.module';
import { LiverDiseaseModule } from './liverdisease/liverdisease.module';
import { BloodPressureModule } from './blood-pressure/blood-pressure.module';
import { InfectiousDiseaseModule } from './infectious-disease/infectious-disease.module';
import { OpPatModule } from './op-pat/op-pat.module';
import { OperationModule } from './operation/operation.module';
import { PatMedModule } from './pat-med/pat-med.module';
import { MedicalConditionsModule } from './medical-conditions/medical-conditions.module';
import { MedicationPatModule } from './medication-pat/medication-pat.module';
import { MedicationModule } from './medication/medication.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/.env',
    }),

    AuthModule,
    AppointmentsModule,
    BloodPressureModule,
    DataBaseModule,
    DentistsModule,
    DiagnosesModule,
    InfectiousDiseaseModule,
    LiverDiseaseModule,
    MedicalConditionsModule,
    MedicationPatModule,
    MedicationModule,
    OpPatModule,
    OperationModule,
    PatientsModule,
    PatientAddInfoModule,
    PatMedModule,
    ProceduresModule,
    SmokingHistoryModule,
    UsersModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
