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
import { CreateDiagnosisDto } from '../dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../dto/update-diagnosis.dto';
import { DiagnosesService } from '../service/diagnoses.service';
import { ResDiagnosisDTO } from '../dto/response-diagnosis.dto';
import { UserId } from 'src/helpers/decorators/user-id.decorator';

@Controller('diagnoses')
export class DiagnosesController {
  constructor(private readonly diagnosesService: DiagnosesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() diagnosisDTO: CreateDiagnosisDto,
    @UserId() userId: string,
  ): Promise<ResDiagnosisDTO> {
    const diagnosis = await this.diagnosesService.create(diagnosisDTO, userId);

    return {
      id: diagnosis.id,
      description: diagnosis.description,
      appointmentId: diagnosis.appointment.id,
    };
  }

  @Get()
  findAll() {
    return this.diagnosesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosisDto: UpdateDiagnosisDto,
  ) {
    return this.diagnosesService.update(+id, updateDiagnosisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosesService.remove(+id);
  }
}
