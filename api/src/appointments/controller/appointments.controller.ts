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
      date: appoint.scheduledAt,
      patientName: appoint.patient.name,
      patientLastName: appoint.dentist.lastName,
      notes: appoint.notes,
      codeProcedure: appoint.procedure.codeProcedure,
    };
  }

  @Get()
  async findAll() {
    const appoints = await this.appointService.findAll();

    return appoints.map((a) => ({
      date: a.scheduledAt,
      patientName: a.patient.name,
      patientLastName: a.patient.lastName,
      codeProcedure: a.procedure.codeProcedure,
    }));
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
