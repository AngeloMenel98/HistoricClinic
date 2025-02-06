import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointentDto } from './create-appointment.dto';

export class UpdateAppointentDto extends PartialType(CreateAppointentDto) {}
