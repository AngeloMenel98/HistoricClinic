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
import { CreateAppointentDto } from '../dto/create-appointment.dto';
import { UpdateAppointentDto } from '../dto/update-appointment.dto';
import { UserId } from 'src/helpers/decorators/user-id.decorator';
import { ResAppointDTO } from '../dto/response-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointService: AppointmentsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() appointDTO: CreateAppointentDto,
    @UserId() userId: string,
  ): Promise<ResAppointDTO> {
    const appoint = await this.appointService.create(appointDTO, userId);

    return {
      id: appoint.id,
      appointDate: appoint.appointmentDate,
      patientId: appoint.patient.id,
      dentistId: appoint.dentist.id,
      notes: appoint.notes,
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
    @Body() updateAppointentDto: UpdateAppointentDto,
  ) {
    return this.appointService.update(+id, updateAppointentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointService.remove(+id);
  }
}
