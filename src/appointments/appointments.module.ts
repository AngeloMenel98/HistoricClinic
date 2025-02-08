import { Module } from '@nestjs/common';
import { AppointmentsController } from './controller/appointments.controller';
import { AppointmentsService } from './service/appointments.service';
import { AppointmentRepository } from './repository/appointment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { DentistsModule } from 'src/dentists/dentists.module';
import { PatientsModule } from 'src/patients/patients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment]),
    DentistsModule,
    PatientsModule,
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentRepository],
})
export class AppointmentsModule {}
