import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppointmentsService } from '../service/appointments.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { UserId } from 'src/helpers/decorators/user-id.decorator';
import { ResAppointDTO } from '../dto/response-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointService: AppointmentsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() appointDTO: CreateAppointmentDto,
    @UserId() userId: string,
  ): Promise<ResAppointDTO> {
    const appoint = await this.appointService.create(appointDTO, userId);

    return {
      id: appoint.id,
      scheduledAt: appoint.scheduledAt,
      patientId: appoint.patient.id,
      dentistId: appoint.dentist.id,
      notes: appoint.notes,
      codeProcedure: appoint.procedure.codeProcedure,
    };
  }

  @Get()
  findAll() {
    return this.appointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointentDto: UpdateAppointmentDto,
  ) {
    return this.appointService.update(+id, updateAppointentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointService.remove(+id);
  }
}
