import { PartialType } from '@nestjs/mapped-types';
import { CreateLiverdiseaseDto } from './create-liverdisease.dto';

export class UpdateLiverdiseaseDto extends PartialType(CreateLiverdiseaseDto) {}
