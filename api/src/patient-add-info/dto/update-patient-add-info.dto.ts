import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientAddInfoDto } from './create-patient-add-info.dto';

export class UpdatePatientAddInfoDto extends PartialType(CreatePatientAddInfoDto) {}
