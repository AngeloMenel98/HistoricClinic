import { Module } from '@nestjs/common';
import { SmokinghistoryController } from './controller/smokinghistory.controller';
import { SmokinghistoryService } from './service/smokinghistory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmokingHistory } from './entities/smokinghistory.entity';
import { SmokingRepository } from './repository/smokinghistory.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SmokingHistory])],
  controllers: [SmokinghistoryController],
  providers: [SmokinghistoryService, SmokingRepository],
  exports: [SmokingRepository],
})
export class SmokingHistoryModule {}
