import { Injectable } from '@nestjs/common';
import { CreateAppointentDto } from '../dto/create-appointment.dto';
import { UpdateAppointentDto } from '../dto/update-appointment.dto';

@Injectable()
export class AppointentsService {
  create(createAppointentDto: CreateAppointentDto) {
    return 'This action adds a new appointent';
  }

  findAll() {
    return `This action returns all appointents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointent`;
  }

  update(id: number, updateAppointentDto: UpdateAppointentDto) {
    return `This action updates a #${id} appointent`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointent`;
  }
}
