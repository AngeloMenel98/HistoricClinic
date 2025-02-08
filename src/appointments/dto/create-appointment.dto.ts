import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAppointentDto {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty({ message: 'Date should not be empty' })
  appointmentDate: Date;

  @IsUUID()
  @IsNotEmpty({ message: 'Patient Id should not be empty' })
  patientId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Dentist Id should not be empty' })
  dentistId: string;
}
