import { Test, TestingModule } from '@nestjs/testing';
import { MedicalConditionsService } from './medical-conditions.service';

describe('MedicalConditionsService', () => {
  let service: MedicalConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalConditionsService],
    }).compile();

    service = module.get<MedicalConditionsService>(MedicalConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
