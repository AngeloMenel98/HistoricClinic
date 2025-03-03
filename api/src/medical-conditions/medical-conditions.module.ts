import { Module } from '@nestjs/common';
import { MedicalConditionsService } from './service/medical-conditions.service';
import { MedicalConditionsController } from './controller/medical-conditions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalCondition } from './entities/medical-condition.entity';
import { ConditionRepository } from './repository/medical-conditions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalCondition])],
  controllers: [MedicalConditionsController],
  providers: [MedicalConditionsService, ConditionRepository],
  exports: [ConditionRepository],
})
export class MedicalConditionsModule {}
