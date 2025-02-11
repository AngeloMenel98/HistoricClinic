import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateOpPatDto } from '../dto/create-op-pat.dto';
import { UpdateOpPatDto } from '../dto/update-op-pat.dto';
import { OpPatService } from '../service/op-pat.service';

@Controller('op-pat')
export class OpPatController {
  constructor(private readonly opPatService: OpPatService) {}

  @Post()
  create(@Body() createOpPatDto: CreateOpPatDto) {
    return this.opPatService.create(createOpPatDto);
  }

  @Get()
  findAll() {
    return this.opPatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opPatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpPatDto: UpdateOpPatDto) {
    return this.opPatService.update(+id, updateOpPatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opPatService.remove(+id);
  }
}
