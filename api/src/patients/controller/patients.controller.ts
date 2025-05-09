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
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientsService } from '../service/patients.service';
import { UserId } from 'src/helpers/decorators/user-id.decorator';
import { ResPatientDTO } from '../dto/response-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() patientDTO: CreatePatientDto,
    @UserId() userId: string,
  ): Promise<ResPatientDTO> {
    const patient = await this.patientsService.create(patientDTO, userId);

    return {
      id: patient.id,
      name: patient.name,
      lastName: patient.lastName,
      dni: patient.dni,
      occupation: patient.occupation,
      birthDate: patient.birthDate,
      createdAt: patient.createdAt,
    };
  }

  @Get()
  async findAll() {
    const patients = await this.patientsService.findAll();

    return patients.map((p) => ({
      id: p.id,
      name: p.name,
      lastName: p.lastName,
      dni: p.dni,
      occupation: p.occupation,
      birthDate: p.birthDate,
      createdAt: p.createdAt,
    }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
