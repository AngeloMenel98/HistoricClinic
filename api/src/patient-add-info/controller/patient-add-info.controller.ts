import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePatientAddInfoDto } from '../dto/create-patient-add-info.dto';
import { UpdatePatientAddInfoDto } from '../dto/update-patient-add-info.dto';
import { PatientAddInfoService } from '../service/patient-add-info.service';

@Controller('patient-add-info')
export class PatientAddInfoController {
  constructor(private readonly patientAddInfoService: PatientAddInfoService) {}

  @Post()
  create(@Body() createPatientAddInfoDto: CreatePatientAddInfoDto) {
    return this.patientAddInfoService.create(createPatientAddInfoDto);
  }

  @Get()
  findAll() {
    return this.patientAddInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientAddInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePatientAddInfoDto: UpdatePatientAddInfoDto,
  ) {
    return this.patientAddInfoService.update(+id, updatePatientAddInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientAddInfoService.remove(+id);
  }
}
