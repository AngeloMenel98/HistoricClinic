import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateLiverdiseaseDto } from '../dto/create-liverdisease.dto';
import { UpdateLiverdiseaseDto } from '../dto/update-liverdisease.dto';
import { LiverDiseaseService } from '../service/liverdisease.service';

@Controller('liverdisease')
export class LiverDiseaseController {
  constructor(private readonly liverService: LiverDiseaseService) {}

  @Post()
  create(@Body() createLiverdiseaseDto: CreateLiverdiseaseDto) {
    return this.liverService.create(createLiverdiseaseDto);
  }

  @Get()
  findAll() {
    return this.liverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liverService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLiverdiseaseDto: UpdateLiverdiseaseDto,
  ) {
    return this.liverService.update(+id, updateLiverdiseaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liverService.remove(+id);
  }
}
