import { Module } from '@nestjs/common';
import { LiverDiseaseService } from './service/liverdisease.service';
import { LiverDiseaseController } from './controller/liverdisease.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiverDisease } from './entities/liverdisease.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LiverDisease])],
  controllers: [LiverDiseaseController],
  providers: [LiverDiseaseService],
})
export class LiverDiseaseModule {}
