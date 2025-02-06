import { Module } from '@nestjs/common';
import { ProceduresService } from './service/procedures.service';
import { ProceduresController } from './controller/procedures.controller';
import { ProcedureRepository } from './repository/procedure.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Procedure } from './entities/procedure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Procedure])],
  controllers: [ProceduresController],
  providers: [ProceduresService, ProcedureRepository],
})
export class ProceduresModule {}
