import { Module } from '@nestjs/common';
import { LiverDiseaseService } from './service/liverdisease.service';
import { LiverDiseaseController } from './controller/liverdisease.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiverDisease } from './entities/liverdisease.entity';
import { LiverRepository } from './repository/liverdisease.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LiverDisease])],
  controllers: [LiverDiseaseController],
  providers: [LiverDiseaseService, LiverRepository],
  exports: [LiverRepository],
})
export class LiverDiseaseModule {}
