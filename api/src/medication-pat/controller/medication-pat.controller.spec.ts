import { Test, TestingModule } from '@nestjs/testing';
import { MedicationPatController } from './medication-pat.controller';
import { MedicationPatService } from '../service/medication-pat.service';

describe('MedicationPatController', () => {
  let controller: MedicationPatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicationPatController],
      providers: [MedicationPatService],
    }).compile();

    controller = module.get<MedicationPatController>(MedicationPatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
