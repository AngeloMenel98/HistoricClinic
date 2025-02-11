import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Cron } from '@nestjs/schedule';
import { AppointmentsService } from 'src/appointments/service/appointments.service';
import { Appointment } from 'src/appointments/entities/appointment.entity';

@Injectable()
export class NotificationsService {
  constructor(
    //private readonly notificationRepo: NotificationRepository,
    private readonly appointService: AppointmentsService,
  ) {}
  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }

  /*@Cron('0 8 * * *')
  async handleDailyNotification() {
    const appointments = await this.appointService.findAppointDue();

    for (const appoint of appointments) {
      await this.sendNotification(appoint);
      await this.appointService.markNotificationAsSent(appoint.id);
    }
  }

  private async sendNotification(appoint: Appointment) {
    const dto: CreateNotificationDto = {
      dentistId: appoint.dentist.id,
      appointmentId: appoint.id,
      content: {
        message: 'Recordatorio turno mañana',
        patientName: appoint.patient.lastName + ' ' + appoint.patient.name,
        procedureType: appoint.procedure.name,
      },
    };

    const notification = await this.create(dto);

    this.webSocketGateWay.sendToUser(
      appoint.dentist.id,
      'new_notification',
      notification,
    );
  }*/
}
