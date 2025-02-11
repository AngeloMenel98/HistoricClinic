import { Test, TestingModule } from '@nestjs/testing';
import { MedicationPatService } from './medication-pat.service';

describe('MedicationPatService', () => {
  let service: MedicationPatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicationPatService],
    }).compile();

    service = module.get<MedicationPatService>(MedicationPatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
