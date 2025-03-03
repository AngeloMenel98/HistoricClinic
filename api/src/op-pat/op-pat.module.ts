import { Module } from '@nestjs/common';
import { OpPatController } from './controller/op-pat.controller';
import { OpPatService } from './service/op-pat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpPat } from './entities/op-pat.entity';
import { OpPatRepo } from './repository/op-pat.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OpPat])],
  controllers: [OpPatController],
  providers: [OpPatService, OpPatRepo],
  exports: [OpPatRepo],
})
export class OpPatModule {}
