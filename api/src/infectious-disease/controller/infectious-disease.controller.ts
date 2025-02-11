import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InfectiousDiseaseService } from '../service/infectious-disease.service';
import { CreateInfectiousDiseaseDto } from '../dto/create-infectious-disease.dto';
import { UpdateInfectiousDiseaseDto } from '../dto/update-infectious-disease.dto';

@Controller('infectious-disease')
export class InfectiousDiseaseController {
  constructor(
    private readonly infectiousDiseaseService: InfectiousDiseaseService,
  ) {}

  @Post()
  create(@Body() createInfectiousDiseaseDto: CreateInfectiousDiseaseDto) {
    return this.infectiousDiseaseService.create(createInfectiousDiseaseDto);
  }

  @Get()
  findAll() {
    return this.infectiousDiseaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.infectiousDiseaseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInfectiousDiseaseDto: UpdateInfectiousDiseaseDto,
  ) {
    return this.infectiousDiseaseService.update(
      +id,
      updateInfectiousDiseaseDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infectiousDiseaseService.remove(+id);
  }
}
