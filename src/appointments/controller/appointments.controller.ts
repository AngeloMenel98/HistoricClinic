import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointentsService } from '../service/appointments.service';
import { CreateAppointentDto } from '../dto/create-appointment.dto';
import { UpdateAppointentDto } from '../dto/update-appointment.dto';

@Controller('appointents')
export class AppointentsController {
  constructor(private readonly appointentsService: AppointentsService) {}

  @Post()
  create(@Body() createAppointentDto: CreateAppointentDto) {
    return this.appointentsService.create(createAppointentDto);
  }

  @Get()
  findAll() {
    return this.appointentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointentDto: UpdateAppointentDto,
  ) {
    return this.appointentsService.update(+id, updateAppointentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointentsService.remove(+id);
  }
}
