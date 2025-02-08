import { Module } from '@nestjs/common';
import { BloodPressureService } from './service/blood-pressure.service';
import { BloodPressureController } from './controller/blood-pressure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodPressure } from './entities/blood-pressure.entity';
import { BloodPressureRepository } from './repository/blood-pressure.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BloodPressure])],
  controllers: [BloodPressureController],
  providers: [BloodPressureService, BloodPressureRepository],
})
export class BloodPressureModule {}
