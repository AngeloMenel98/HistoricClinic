import { Module } from '@nestjs/common';
import { AppointentsController } from './controller/appointments.controller';
import { AppointentsService } from './service/appointments.service';
import { AppointmentRepository } from './repository/appointment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment])],
  controllers: [AppointentsController],
  providers: [AppointentsService, AppointmentRepository],
})
export class AppointmentsModule {}
