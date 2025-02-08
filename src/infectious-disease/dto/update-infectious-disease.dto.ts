import { PartialType } from '@nestjs/mapped-types';
import { CreateInfectiousDiseaseDto } from './create-infectious-disease.dto';

export class UpdateInfectiousDiseaseDto extends PartialType(CreateInfectiousDiseaseDto) {}
