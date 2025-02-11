import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMedicalConditionDto } from '../dto/create-medical-condition.dto';
import { UpdateMedicalConditionDto } from '../dto/update-medical-condition.dto';
import { MedicalConditionsService } from '../service/medical-conditions.service';

@Controller('medical-conditions')
export class MedicalConditionsController {
  constructor(
    private readonly medicalConditionsService: MedicalConditionsService,
  ) {}

  @Post()
  create(@Body() createMedicalConditionDto: CreateMedicalConditionDto) {
    return this.medicalConditionsService.create(createMedicalConditionDto);
  }

  @Get()
  findAll() {
    return this.medicalConditionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalConditionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicalConditionDto: UpdateMedicalConditionDto,
  ) {
    return this.medicalConditionsService.update(+id, updateMedicalConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalConditionsService.remove(+id);
  }
}
