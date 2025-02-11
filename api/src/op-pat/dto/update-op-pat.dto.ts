import { PartialType } from '@nestjs/mapped-types';
import { CreateOpPatDto } from './create-op-pat.dto';

export class UpdateOpPatDto extends PartialType(CreateOpPatDto) {}
