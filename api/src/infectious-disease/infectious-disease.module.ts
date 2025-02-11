import { Module } from '@nestjs/common';
import { InfectiousDiseaseService } from './service/infectious-disease.service';
import { InfectiousDiseaseController } from './controller/infectious-disease.controller';
import { InfDisRepository } from './repository/infectious-disease.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfectiousDisease } from './entities/infectious-disease.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InfectiousDisease])],
  controllers: [InfectiousDiseaseController],
  providers: [InfectiousDiseaseService, InfDisRepository],
})
export class InfectiousDiseaseModule {}
