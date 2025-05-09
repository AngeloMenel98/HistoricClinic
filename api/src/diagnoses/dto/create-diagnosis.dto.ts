import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDiagnosisDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUUID()
  @IsNotEmpty()
  appointmentId: string;
}
