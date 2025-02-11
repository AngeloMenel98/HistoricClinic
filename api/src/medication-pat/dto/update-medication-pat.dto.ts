import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicationPatDto } from './create-medication-pat.dto';

export class UpdateMedicationPatDto extends PartialType(CreateMedicationPatDto) {}
