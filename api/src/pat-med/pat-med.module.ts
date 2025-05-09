import { Module } from '@nestjs/common';
import { PatMedService } from './service/pat-med.service';
import { PatMedController } from './controller/pat-med.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatMed } from './entities/pat-med.entity';
import { PatMedRepo } from './repository/pat-med.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PatMed])],
  controllers: [PatMedController],
  providers: [PatMedService, PatMedRepo],
  exports: [PatMedRepo],
})
export class PatMedModule {}
