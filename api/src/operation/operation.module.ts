import { Module } from '@nestjs/common';
import { OperationService } from './service/operation.service';
import { OperationController } from './controller/operation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './entities/operation.entity';
import { OperationRepository } from './repository/operation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Operation])],
  controllers: [OperationController],
  providers: [OperationService, OperationRepository],
  exports: [OperationRepository],
})
export class OperationModule {}
