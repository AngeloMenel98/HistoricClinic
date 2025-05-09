import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMedicationPatDto } from '../dto/create-medication-pat.dto';
import { UpdateMedicationPatDto } from '../dto/update-medication-pat.dto';
import { MedicationPatService } from '../service/medication-pat.service';

@Controller('medication-pat')
export class MedicationPatController {
  constructor(private readonly medicationPatService: MedicationPatService) {}

  @Post()
  create(@Body() createMedicationPatDto: CreateMedicationPatDto) {
    return this.medicationPatService.create(createMedicationPatDto);
  }

  @Get()
  findAll() {
    return this.medicationPatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicationPatService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicationPatDto: UpdateMedicationPatDto,
  ) {
    return this.medicationPatService.update(+id, updateMedicationPatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicationPatService.remove(+id);
  }
}
