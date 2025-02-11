import { PartialType } from '@nestjs/mapped-types';
import { CreateSmokinghistoryDto } from './create-smokinghistory.dto';

export class UpdateSmokinghistoryDto extends PartialType(CreateSmokinghistoryDto) {}
