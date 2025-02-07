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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/.env',
    }),

    AuthModule,
    AppointmentsModule,
    DataBaseModule,
    DentistsModule,
    DiagnosesModule,
    PatientsModule,
    ProceduresModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
