import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DentistsService } from '../service/dentists.service';
import { CreateDentistDto } from '../dto/create-dentist.dto';
import { UpdateDentistDto } from '../dto/update-dentist.dto';
import { UserId } from 'src/helpers/decorators/user-id.decorator';
import { ResDentistDto } from '../dto/response-dentist.dto';

@Controller('dentists')
export class DentistsController {
  constructor(private readonly dentistsService: DentistsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createDentistDto: CreateDentistDto,
    @UserId() userId: string,
  ): Promise<ResDentistDto> {
    const dentist = await this.dentistsService.create(createDentistDto, userId);

    return {
      id: dentist.id,
      name: dentist.name,
      lastName: dentist.lastName,
      professionalId: dentist.professionalId,
      userId: dentist.user.id,
    };
  }

  @Get()
  findAll() {
    return this.dentistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dentistsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDentistDto: UpdateDentistDto) {
    return this.dentistsService.update(+id, updateDentistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dentistsService.remove(+id);
  }
}
