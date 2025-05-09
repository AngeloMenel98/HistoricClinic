import { Test, TestingModule } from '@nestjs/testing';
import { PatMedService } from '../service/pat-med.service';
import { PatMedController } from './pat-med.controller';

describe('PatMedController', () => {
  let controller: PatMedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatMedController],
      providers: [PatMedService],
    }).compile();

    controller = module.get<PatMedController>(PatMedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
