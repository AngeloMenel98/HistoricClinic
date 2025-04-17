import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProceduresService } from '../service/procedures.service';
import { CreateProcedureDto } from '../dto/create-procedure.dto';
import { UpdateProcedureDto } from '../dto/update-procedure.dto';

@Controller('procedures')
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService) {}

  @Post()
  create(@Body() createProcedureDto: CreateProcedureDto) {
    return this.proceduresService.create(createProcedureDto);
  }

  @Get()
  async findAll() {
    const procedures = await this.proceduresService.findAll();

    return procedures.map((d) => ({
      id: d.id,
      name: d.name,
      codeProcedure: d.codeProcedure,
      createdAt: d.createdAt,
    }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proceduresService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProcedureDto: UpdateProcedureDto,
  ) {
    return this.proceduresService.update(+id, updateProcedureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proceduresService.remove(+id);
  }
}
