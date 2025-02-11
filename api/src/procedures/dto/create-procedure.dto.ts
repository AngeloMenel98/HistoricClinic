import { IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator';
import { IsUUIDOrString } from 'src/validators/uuid-string.validator';

export class CreateProcedureDto {
  @Validate(IsUUIDOrString, ['Code'])
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  name?: string;
}
