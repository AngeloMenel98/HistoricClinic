import { PartialType } from '@nestjs/mapped-types';
import { CreatePatMedDto } from './create-pat-med.dto';

export class UpdatePatMedDto extends PartialType(CreatePatMedDto) {}
