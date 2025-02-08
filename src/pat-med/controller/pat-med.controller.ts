import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatMedService } from '../service/pat-med.service';
import { CreatePatMedDto } from '../dto/create-pat-med.dto';
import { UpdatePatMedDto } from '../dto/update-pat-med.dto';

@Controller('pat-med')
export class PatMedController {
  constructor(private readonly patMedService: PatMedService) {}

  @Post()
  create(@Body() createPatMedDto: CreatePatMedDto) {
    return this.patMedService.create(createPatMedDto);
  }

  @Get()
  findAll() {
    return this.patMedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patMedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatMedDto: UpdatePatMedDto) {
    return this.patMedService.update(+id, updatePatMedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patMedService.remove(+id);
  }
}
