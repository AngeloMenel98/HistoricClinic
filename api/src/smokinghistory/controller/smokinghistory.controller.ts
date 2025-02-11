import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SmokinghistoryService } from '../service/smokinghistory.service';
import { CreateSmokinghistoryDto } from '../dto/create-smokinghistory.dto';
import { UpdateSmokinghistoryDto } from '../dto/update-smokinghistory.dto';

@Controller('smokinghistory')
export class SmokinghistoryController {
  constructor(private readonly smokinghistoryService: SmokinghistoryService) {}

  @Post()
  create(@Body() createSmokinghistoryDto: CreateSmokinghistoryDto) {
    return this.smokinghistoryService.create(createSmokinghistoryDto);
  }

  @Get()
  findAll() {
    return this.smokinghistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smokinghistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSmokinghistoryDto: UpdateSmokinghistoryDto,
  ) {
    return this.smokinghistoryService.update(+id, updateSmokinghistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smokinghistoryService.remove(+id);
  }
}
