import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProcedureDto } from '../dto/create-procedure.dto';
import { UpdateProcedureDto } from '../dto/update-procedure.dto';
import { ProcedureRepository } from '../repository/procedure.repository';
import { Procedure } from '../entities/procedure.entity';

@Injectable()
export class ProceduresService {
  constructor(private readonly procedureRepo: ProcedureRepository) {}
  create(procedureDTO: CreateProcedureDto) {
    const procedure = new Procedure();
    procedure.codeProcedure = procedureDTO.code;
    procedure.name = procedureDTO.name;

    return this.procedureRepo.createProcedure(procedure);
  }

  async findAll() {
    const procedures = await this.procedureRepo.find();

    if (!procedures) {
      throw new NotFoundException(`There is any procedure created.`);
    }

    return procedures;
  }

  async findById(id: string) {
    const procedure = await this.procedureRepo.findOneBy({ id });
    if (!procedure) {
      throw new NotFoundException(`Procedure with Id #${id} not Found`);
    }
    return procedure;
  }

  async findByCodeOrCreate(code: string) {
    const procedure = await this.procedureRepo.findByCode(code);

    if (!procedure) {
      const dto: CreateProcedureDto = { code };
      return this.create(dto);
    }

    return procedure;
  }

  update(id: number, updateProcedureDto: UpdateProcedureDto) {
    return `This action updates a #${id} procedure`;
  }

  remove(id: number) {
    return `This action removes a #${id} procedure`;
  }
}
