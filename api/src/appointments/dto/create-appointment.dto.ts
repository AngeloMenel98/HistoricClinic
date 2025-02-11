import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Validate,
} from 'class-validator';
import { IsUUIDOrString } from 'src/validators/uuid-string.validator';

export class CreateAppointmentDto {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty({ message: 'Date should not be empty' })
  scheduledAt: Date;

  @Validate(IsUUIDOrString, ['Code'])
  @IsOptional()
  code: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Patient Id should not be empty' })
  patientId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Dentist Id should not be empty' })
  dentistId: string;

  newCode?: string;
}
