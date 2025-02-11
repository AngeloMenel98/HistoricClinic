import { Test, TestingModule } from '@nestjs/testing';
import { MedicalConditionsController } from './medical-conditions.controller';
import { MedicalConditionsService } from '../service/medical-conditions.service';

describe('MedicalConditionsController', () => {
  let controller: MedicalConditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalConditionsController],
      providers: [MedicalConditionsService],
    }).compile();

    controller = module.get<MedicalConditionsController>(
      MedicalConditionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
